// This keyword gets created in global execution context or when we invoke a function 

// ex: 
console.log(this)//f12 in console you can see window object

// This keyword is a pointer that points to an object.
const users = {
    name1 : "demo1",
    name2 : "demo2",
    name3 : "demo3",

    sayhi(){
        console.log(this)//this keyword point to the current object itself where its on
        // we can access the values with it
        console.log(this.name3)
    }
}

users.sayhi()


const names = {
    name1 : "demo",
    skills : ["Js","React","tailwind css"],
    greet(){
        console.log(`hello ${this.name1}`)
        const getskills = () =>{
            console.log(`your skills are : ${this.skills}`)
        } 
        getskills()
    } 
}
names.greet()