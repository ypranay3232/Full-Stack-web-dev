// Remember : Functions are special objects, lets see how to apply some methods 

// 1)BIND : Does not executes the function immediately, it returns a new function with "this" keyword attached/Bounded by the obj passed so you have to execute the new function inorder to run the program.

const person = {
    FirstName:"demo",
    LastName:"user",
    getName(){
        console.log(`The first name is ${this.FirstName} and last name is ${this.LastName}`)
    }
}

function registeredUser(){//this function can access person object
    this.getName()//prints the first name and last name 
    console.log(this.FirstName)
}
const register = registeredUser.bind(person)//by binding the function with obj we can access the obj with function by doing this.Firstname,lastname, its functions etc
register()


// Call : executes the function immediately, this works the same as bind()
registeredUser.call(person)

// apply : is same as call but it takes an array as argument. 

function applyTest(greet,test){
    console.log(`${greet}, my name is ${this.FirstName} and ${test}`)
}

applyTest.apply(person, ["hello", "!"])//this returns:  hello my name is demo and !

