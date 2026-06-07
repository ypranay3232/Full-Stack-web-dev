# ConnectSpace 
A modern, responsive full-stack developer social hub showcasing **Mongoose Data Association**, **JWT Session Authentication**, and interactive user engagement features.

---

##  Technology Stack
* **Runtime**: Node.js
* **Backend**: Express.js
* **Database**: MongoDB (via Mongoose ODM)
* **Authentication**: JSON Web Tokens (JWT) & HTTP-only cookies
* **Security**: Password hashing using `bcrypt`
* **Templating Engine**: EJS (Embedded JavaScript)
* **Styling**: Tailwind CSS (CDN-based v4) for a premium dark-themed UI

---

##  Key Features
1. **JWT-Based Authentication**: Custom auth middleware verifying user sessions via signed tokens.
2. **Secure Passwords**: Password encryption using bcrypt salt generation and hashing.
3. **Data Association**: Deep Mongoose reference links between users and posts.
4. **Publish Posts**: Dynamic markdown-friendly feed rendering posts in reverse chronological order.
5. **Like / Unlike Toggle**: Interactive visual likes counter.
6. **Comments Section**: Collaborative sub-document comment threads on any post.
7. **Author Privileges**: Secure ownership check so users can only edit or delete their own posts.

---

##  Project Structure
```text
Day77_DataAssociation_project/
├── models/
│   ├── usermodel.js      # User Schema & MongoDB connection
│   └── post.js           # Post Schema with User Refs & Comments sub-docs
├── views/
│   ├── index.ejs         # Premium Registration Page
│   ├── login.ejs         # Modern Login Page
│   ├── profile.ejs       # Main feed dashboard & interaction panel
│   └── edit.ejs          # Post editor page
├── app.js                # Server entry point, middleware & routing
├── Goal.md               # Original project milestones
├── package.json          # Dependencies & metadata
└── README.md             # Detailed documentation (This file)
```

---

##  Step-by-Step Guide: Setup and Running

Follow these steps to get the application up and running on your local machine:

### Step 1: Install Dependencies
Make sure you have Node.js installed. Navigate to the project folder and run:
```bash
npm install
```
This will install all required dependencies: `express`, `mongoose`, `ejs`, `cookie-parser`, `bcrypt`, `jsonwebtoken`, and `nodemon`.

### Step 2: Start your MongoDB Database
ConnectSpace requires a local MongoDB instance running on port `27017`.

* **On Windows (using Services)**:
  1. Open PowerShell or Command Prompt as **Administrator**.
  2. Run the command to start the service:
     * *PowerShell*: `Start-Service MongoDB`
     * *Command Prompt*: `net start MongoDB`
* **Using command line manual run**:
  If you do not run MongoDB as a service, run:
  ```bash
  mongod
  ```

### Step 3: Run the Server
Start the development server using `nodemon` (which auto-restarts on file changes) or standard `node`:
```bash
npx nodemon app.js
```
*You should see the following logs in your terminal:*
```text
Server running on http://localhost:3000
Connected to MongoDB successfully.
```

### Step 4: Testing the Flows in the Browser
Open your browser and navigate to **`http://localhost:3000`**.

1. **Create an Account**: Enter your Name, Username, Age, Email, and Password on the Register page.
2. **Dashboard Redirection**: Upon registration, a JWT session token will be generated, saved to your browser cookies, and you will be redirected to the `/profile` dashboard.
3. **Publishing a Post**: Write a message in the text area and click **Publish Post**. It will show up instantly at the top of the feed.
4. **Interact**: Try clicking the **Like** button or writing a comment in the input field of a post to test the interactive elements.
5. **Editing/Deleting**: As the author of a post, you will see `Edit` and `Delete` actions. Try modifying your post or removing it.
6. **Logout & Session Protection**: Click **Log Out** in the header. Try navigating manually back to `http://localhost:3000/profile` — the authentication middleware will intercept the request and redirect you to `/login`.
7. **Login**: Log back in using the credentials you registered earlier to resume your session.

---

## Deep-Dive: How Mongoose Data Association Works
This project implements **Referencing (Normalization)** to link users and posts:

### 1. The Schemas
In [usermodel.js](file:///c:/Users/ypran/OneDrive/Desktop/Full-Stack-web-dev/100DaysOfCode/Day77_DataAssociation_project/models/usermodel.js):
```javascript
posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }]
```
In [post.js](file:///c:/Users/ypran/OneDrive/Desktop/Full-Stack-web-dev/100DaysOfCode/Day77_DataAssociation_project/models/post.js):
```javascript
user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
```

### 2. Post Creation & Linking
When a user publishes a post, we save the post with the user's ID, and push that post's ID into the user's own `posts` array:
```javascript
let post = await postModel.create({
    user: user._id,
    content: content
});
user.posts.push(post._id);
await user.save();
```

### 3. Populating Query Results
When rendering the user's personal feed, we use `.populate("user")` and filter the query to only fetch posts where the author is the currently logged-in user:
```javascript
let user = await usermodel.findOne({ email: req.user.email }).populate("posts");
let posts = await postModel.find({ user: user._id }).populate("user").sort({ createdAt: -1 });
```
This ensures that each user has their own private space and posts from different users do not collide!
