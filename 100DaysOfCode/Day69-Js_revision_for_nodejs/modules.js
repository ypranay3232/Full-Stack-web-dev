// importing the first module fs : filesystem used to perform file operations, reading, writing,deleting, appending and all the necessary operations.  Go to nodejs docs and --> filesystem --> callback api : fs.writefile() the syntax is as follow : fs.writefile(filename,data[,optional field],callback (its just a function))
const fs = require('fs')
// here we nested the file operations because we get some sync errors because we try to perform all operations at once so we can do two things 1) use async await 2) nest callbacks

// 1) create a new file with some context and with a function that checks if this contains any errors else prints ok now to print this : "node modules.js"
fs.writeFile("demo.txt","this is data", (err)=>{
    if(err) return console.error(err);
    console.log("ok");

    // 2)Append the file : its same as the create file
    fs.appendFile("demo.txt"," This is a messaged added from append",(err)=>{
        if(err) return console.error(err);
        console.log("file Appended successfully ");

        // 3)Rename file : here we pass the old filename and new filename and a callback (function)
        fs.rename("demo.txt","NewDemo.txt",(err)=>{
            if(err) return console.error(err)
            console.log("File renamed successfully ")

            // 4) copy file : takes the src address, destination address and a callback function, here we do as we copy the current file and paste it in the copy folder
            fs.copyFile("NewDemo.txt", "./copy/NewDemoCopy.txt", (err) => {
                if (err) return console.error(err)
                console.log("done")
                
                // 5)unlink : deleting the file 
                fs.unlink("NewDemo.txt",(err)=>{
                    if(err) return console.error(err)
                        console.log("File Deleted")
                })
            })
        })
    })
})
