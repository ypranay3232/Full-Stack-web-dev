// we use spread operator to create copies.

const ratings = [9,7,3,9,10,7,8]
const CopyOfRating = [...ratings]//now all the elements of ratings are copies into CopyOfRating

CopyOfRating.sort((a,b) =>{
    return a - b
})
console.log(CopyOfRating)

const Name = "qwerty"
const letters = Name.split("")
letters.sort()
console.log(letters)

// concatenation : 
const OtherNames = ["max","Matteo","joseph"]

const allnames = OtherNames.concat(Name)
console.log(allnames)