const express = require("express")
const app = express()
const usermodel = require("./models/usermodel")
const postModel = require("./models/post")
const cookieParser = require("cookie-parser")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const path = require("path")
const multer = require("multer")
const crypto = require("crypto")
const fs = require("fs")

const JWT_SECRET = "shhhhhh"

// Ensure public/images/uploads exists
const uploadDir = path.join(__dirname, "public", "images", "uploads")
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, (err, bytes) => {
            if (err) return cb(err);
            const fn = bytes.toString("hex") + path.extname(file.originalname);
            cb(null, fn);
        });
    }
})
const upload = multer({ storage: storage })

// setting up middleware
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    if (!req.cookies.token) {
        return res.redirect("/login");
    }
    try {
        let data = jwt.verify(req.cookies.token, JWT_SECRET);
        req.user = data;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.redirect("/login");
    }
}

app.get("/", (req, res) => {
    // If user is already logged in, redirect to profile
    if (req.cookies.token) {
        try {
            jwt.verify(req.cookies.token, JWT_SECRET);
            return res.redirect("/profile");
        } catch(err) {
            res.clearCookie("token");
        }
    }
    res.render("index.ejs")
})

// Register/ account creation route
app.post("/Register", async (req, res) => {
    try {
        let { username, name, password, email, age } = req.body
        
        // Check if user already exists
        let user = await usermodel.findOne({ email })
        if (user) return res.status(500).send("User already registered")

        // Hashing password and creating user
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).send(err.message);
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.status(500).send(err.message);
                try {
                    let newUser = await usermodel.create({
                        username,
                        name,
                        password: hash,
                        email,
                        age
                    });

                    // Generate JWT token
                    let token = jwt.sign({ email: newUser.email, userid: newUser._id }, JWT_SECRET);
                    res.cookie("token", token);
                    res.redirect("/profile");
                } catch (createErr) {
                    res.status(500).send(createErr.message);
                }
            })
        })
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Login Routes
app.get("/login", (req, res) => {
    if (req.cookies.token) {
        try {
            jwt.verify(req.cookies.token, JWT_SECRET);
            return res.redirect("/profile");
        } catch(err) {
            res.clearCookie("token");
        }
    }
    res.render("login.ejs")
})

app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await usermodel.findOne({ email });
        if (!user) return res.status(400).send("Invalid email or password");

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) return res.status(500).send("Authentication failed");
            if (result) {
                let token = jwt.sign({ email: user.email, userid: user._id }, JWT_SECRET);
                res.cookie("token", token);
                res.redirect("/profile");
            } else {
                res.status(400).send("Invalid email or password");
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Logout Route
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
})

// Profile Route
app.get("/profile", isLoggedIn, async (req, res) => {
    try {
        let user = await usermodel.findOne({ email: req.user.email }).populate("posts");
        let posts = await postModel.find({ user: user._id }).populate("user").sort({ createdAt: -1 });
        res.render("profile.ejs", { user, posts });
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Post Creation Route
app.post("/post", isLoggedIn, async (req, res) => {
    try {
        let user = await usermodel.findOne({ email: req.user.email });
        let { content } = req.body;
        
        let post = await postModel.create({
            user: user._id,
            content
        });

        user.posts.push(post._id);
        await user.save();
        res.redirect("/profile");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Toggle Like Route
app.get("/like/:id", isLoggedIn, async (req, res) => {
    try {
        let post = await postModel.findOne({ _id: req.params.id });
        if (!post) return res.status(404).send("Post not found");

        let index = post.likes.indexOf(req.user.userid);
        if (index === -1) {
            post.likes.push(req.user.userid);
        } else {
            post.likes.splice(index, 1);
        }
        await post.save();
        res.redirect("/profile");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Edit Post Route (GET)
app.get("/edit/:id", isLoggedIn, async (req, res) => {
    try {
        let post = await postModel.findOne({ _id: req.params.id }).populate("user");
        if (!post) return res.status(404).send("Post not found");
        
        // Ensure only the author can edit
        if (post.user._id.toString() !== req.user.userid.toString()) {
            return res.status(403).send("Unauthorized");
        }
        
        res.render("edit.ejs", { post });
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Update Post Route (POST)
app.post("/update/:id", isLoggedIn, async (req, res) => {
    try {
        let post = await postModel.findOne({ _id: req.params.id });
        if (!post) return res.status(404).send("Post not found");
        
        // Ensure only the author can update
        if (post.user.toString() !== req.user.userid.toString()) {
            return res.status(403).send("Unauthorized");
        }

        post.content = req.body.content;
        await post.save();
        res.redirect("/profile");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Delete Post Route
app.get("/delete/:id", isLoggedIn, async (req, res) => {
    try {
        let post = await postModel.findOne({ _id: req.params.id });
        if (!post) return res.status(404).send("Post not found");

        // Ensure only the author can delete
        if (post.user.toString() !== req.user.userid.toString()) {
            return res.status(403).send("Unauthorized");
        }

        await postModel.deleteOne({ _id: req.params.id });

        // Remove from user's posts array
        await usermodel.updateOne(
            { _id: req.user.userid },
            { $pull: { posts: req.params.id } }
        );

        res.redirect("/profile");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Comment Route
app.post("/comment/:id", isLoggedIn, async (req, res) => {
    try {
        let post = await postModel.findOne({ _id: req.params.id });
        if (!post) return res.status(404).send("Post not found");

        let user = await usermodel.findOne({ email: req.user.email });

        post.comments.push({
            user: user._id,
            username: user.username,
            text: req.body.text
        });

        await post.save();
        res.redirect("/profile");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Profile Image Upload Route
app.post("/upload/profile", isLoggedIn, upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }
        let user = await usermodel.findOne({ email: req.user.email });
        user.profileImage = req.file.filename;
        await user.save();
        res.redirect("/profile");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})