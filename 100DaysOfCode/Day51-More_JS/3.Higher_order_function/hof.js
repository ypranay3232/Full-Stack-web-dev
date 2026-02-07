const { title } = require("process")

const recipes = ["Chilli Crisp Garlic Butter Spaghetti", "Peanut Satay Udon", "Pita Pizza", "Lettuce Wraps", "Chicken Tetrazzini","pasta with Chicken"]
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

// find() : goes to each element in the array and check if each starts with chicken if any found returns that else undefined 
const find_recipe = recipes.find(function(recipes){
    return recipes.includes("Chicken")//returns the recipe which starts with "Chicken"
})
console.log(find_recipe)

// filter() : works same as find() but it returns more than 1 value. 
const Games = [
    {title: "God of war", rating: 9.5},
    {title: "COD", rating:7},
    {title: "Froza Horizon", rating:9},
    {title: "Last of us", rating:9.5},
    {title: "League of Legends", rating: 6}
]

const suggestions = Games.filter(function(game){
    return game.rating > 9
})
console.log("Best games for you : ")
console.log(suggestions)


// Some and every : used to check conditions returns true or false 
const CheckRating = Games.every(function(game){
    return game.rating > 9 // is every game rated > 9 ? of no so returns false 
})
console.log(CheckRating)

const fairchecking = Games.some(function(game){
    return game.rating > 8//is some games rated > 8 ? yes true
})
console.log(fairchecking)