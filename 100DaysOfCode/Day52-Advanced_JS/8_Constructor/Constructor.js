// a constructor function generates us an object. Generally popple define the function names with capital letter. 

function Todo(name,completed){
    this.name = name
    this.completed = completed
}

const todo = new Todo("demo",false)
console.log(todo)
// Notice : we created a new object, it because of the new keyword. 

const todo2 = new Todo("complete the project ", true)
console.log(todo2)

// Prototypes : is a mechanism allows objects to inherit properties and methods from others. ex: 
function Animal(name){
    this.name = name
} 

// adding a method to the prototype so all other animals can share it
Animal.prototype.speak = function(){
    console.log(`${this.name} makes a noise `)
}

// new function that can have access to speak
const dog = new Animal("Husky")
dog.speak()//Alex makes a noise. it is accessible via prototype chain 