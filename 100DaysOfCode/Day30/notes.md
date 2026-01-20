What is Javascript ?

A both client and server side scripting language, and lets see how to add one to html
Create a file script.js or use <script>

-->alert()

-->What is a variable and how to create one ! a variable is a storage where we can store a value
can be of any data type

in js we can create a variable in 3 ways : var,let, const

1) var --> is the original keyword of js to declare variables it is a function scope (can access 
within a function but if declared outside of function we can access as global var) 

2) let --> introduced in ES6 (2015) --> ECMAScript is a standard of which js is built so a change
made to ECMAscript influenced js so we got let

Let is block scoped meaning we can access within a single line that's it, ex: for and if  

3) const --> used to declare constants introduced in ES6 and it is also block scoped


--------------------------------------------------------------------------------------------------
Create a variable and pass it to alert() to print it. and also try to overwrite the variable value

--------------------------------------------------------------------------------------------------
--> External js : remove the <script> code and create a new js file and paste it and then
import the script to html. 
to do it we use <script src="app.js"> </script> so the new js file is app.js
--------------------------------------------------------------------------------------------------
Introduction To arrays ! 

An array is a collection of similar or different data values 
--> used when we want to store more than 1 value to a variable (so we use array as : )
ex: remove all app.js code and lets make it practical ! 
let age = 32
let name = "demo"
let hobbies1 = "basketball"
let hobbies2 = "reading" etc etc etc, so rather than creating multiple variables we create one and 
store values in it 

let hobbies = [] --> let hobbies = ['sports','cooking','reading']
we can also access these with index (hobbies[1]) -->cooking (because index always start with 0)
--------------------------------------------------------------------------------------------------
Introduction to objects !
lets say user have a job and it has two labels title and place 
let job = {title, place} so --> {title : 'developer', place = 'Remote'}