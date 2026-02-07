const store = ["shirts","accessories","shoes","watches","winter wear","summer wear"]
const ratings = [8,9.7,3.3,1,10,7,6,9]

// to sort arrays we have sort() which sorts. 
store.sort()
console.log(store)//remember if something is in Uppercase that comes first before a, because Uppercase has priority than lower, so if we compare Shirts and accessories we get (Shirts) first then we get accessories.

ratings.sort()//sort() converts everything to strings 
// console.log(ratings)//this turns them into strings and store them alphabetically.

// so we use this method to sort. by using this operation js stop treating as strings and compare them as mathematical operations. 
ratings.sort((a,b)=>{//we gave two operations a,b : if a-b returns -ve a comes first, else B first 
    return a-b //ex: 8 - 9.7 : 8- 9.7 = -ve value so (a) comes before (b) 
})
console.log(ratings)