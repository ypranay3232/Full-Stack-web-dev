const recipes = ["Chilli Crisp Garlic Butter Spaghetti", "Peanut Satay Udon", "Pita Pizza", "Lettuce Wraps", "Chicken Tetrazzini"]
// recipes.push("fish and chips")
// console.log(recipes)//this is normal !


// hof : higher order function is a function that takes another function as attribute. 
recipes.forEach(function(recipes){
    console.log(recipes)
})

// ex: create a function that has a attribute and call itself (attribute) and then create another function that prints hello and now call the first function by passing an attribute (second function)

function repeater(fn){
    fn()
    fn()
    fn()
    fn()
}

function greet(){
    console.log("hello ! ")
}

repeater(greet)

// MAP() : a map() is a hof that create a new array from calling a function for every new element and returns the result.
const newRecipes = recipes.map(function(recipes){
    return recipes.toUpperCase()//map() always try to return something if no return type is mentioned it returns undefined.
})
console.log(newRecipes)
