const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')

// adding middleware 
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    fs.readdir(`./Tasks`,(err,files)=>{
        res.render("index.ejs", { files: files })
    })
})

app.post('/create', (req, res) => {
    // using title without spaces as file name
    const title = req.body.title.split(' ').join('') + '.txt';
    fs.writeFile(`./Tasks/${title}`, req.body.details, (err) => {
        if(err) console.error(err);
        res.redirect('/');
    })
})

app.get('/task/:filename', (req, res) => {
    fs.readFile(`./Tasks/${req.params.filename}`, 'utf-8', (err, fileData) => {
        if(err) console.error(err);
        res.render('task.ejs', { filename: req.params.filename, fileData: fileData });
    })
})

app.get('/edit/:filename', (req, res) => {
    fs.readFile(`./Tasks/${req.params.filename}`, 'utf-8', (err, fileData) => {
        if(err) return console.error(err);
        res.render('edit.ejs', { filename: req.params.filename, fileData: fileData });
    })
})

app.post('/edit', (req, res) => {
    const previousFilename = req.body.previous;
    const newTitle = req.body.title.split(' ').join('');
    const newFilename = newTitle + '.txt';

    fs.rename(`./Tasks/${previousFilename}`, `./Tasks/${newFilename}`, (err) => {
        if (err) return console.error(err);
        fs.writeFile(`./Tasks/${newFilename}`, req.body.details, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
    })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})