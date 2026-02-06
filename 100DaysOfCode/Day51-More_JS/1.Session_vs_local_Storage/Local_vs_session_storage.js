// Local storage stores the data persistently even when a browser tab is closed and reopened where as session storage stores data until tab or window is closed. Both use key value pairs to store data in browser. 

// session storage == temporary storage 
// local storage == permanent storage until explicitly cleared by user or code

localStorage.setItem("Task","code until you learn something") //now go to browser f12 : Application then -->Local Storage. you can see a localhost : 3000 in that you can see key value pairs : 
// Task : code until you learn something


// even if you refresh the page it stays the same.  : 

sessionStorage.setItem("Task","Have a walk")//this gets wiped after closing the browser so test it by commenting this line. But the localstorage still be visible even after commenting

// To clear the storage sessions : 
localStorage.clear()


const TodoList = ["Drink 3L of water","work","sleep"]
localStorage.setItem("todo's",JSON.stringify(TodoList))

const retrived = JSON.parse(localStorage.getItem("todo's"))
console.log(retrived)