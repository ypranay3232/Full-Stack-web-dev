// 1. Arrays : collection of different elements. operations we usually do on arrays : map() foreach() find()
// filter() indexof() 
let arr = [10,20,30,40,"hello world"]

// 1) to apply a change or operation on each element of an array we use foreach(): this takes a function.
// in simple terms for each element in array we loop, and here we have a parameter (inc) so each time the loop runs the inc value gets assigned as inc = 10, inc = 20, inc = 30 etc., if i do as inc + 1 we get : 10 + 1 = 11,21,31...
arr.forEach((inc)=>{
    console.log(inc + 1);//so we add + to add the values of array, inc represents the values of array here
})


// 2) map() : this returns an array by taking an array works same as foreach(). But there is something interesting we cant directly print it using consolelog rather we assign the map to a var and return the calculations. and console log the assigned variable.
let arr1 = [1,2,3,4,5,6]

let result = arr1.map((inc)=>{
    return inc + 10//now this returns an array with added +10 to all the values of array
})
console.log(result)

// 3) Filter : used to filterout the elements : filter number which are > 10
let arr2 = [12,32,1,22,3,64,4,6,28,8,54]

let ans = arr2.filter((val)=>{
    if(val>10){
        return true//we dont return val we return true : if its true then the value is kept in new array 
    }else{
        return false;
    }
})
console.log(ans)



// 4) find : we use find to find any values in array and here if any element matches with condition we return val unlike filter we dont use true or false

let arr3 = [10,20,3,12,43,32,65,43,45,76,41]

let ans1 = arr3.find((val)=>{
    if(val > 30){
        return val
    }
})
console.log(ans1)

// indexof() : it returns -1 if the element is not found if found it returns the index
let arr4 = [12,32,234,2,34,23,43,4,33,36,5,76,4]

console.log(arr4.indexOf(4))


// i already know about objects so this is gonna be a quick session : 

let obj = {
    name: "user",
    sal : 1213,
    something: "yes something"
}
console.log(obj)

// if we want to change the values of this we can do it as : 
obj.something = "not something"
console.log(obj.something)


// but if i want to prevent this from happening i can free the object : 
Object.freeze(obj)//from now on no changes can be made in the object

obj.sal = 343543254
console.log(obj.sal)//now change occurred 