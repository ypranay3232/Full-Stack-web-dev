let course = 'Web dev Bootcamp'
let price = 499
let goals = [' To Build websites ', ' To understand how web works ']

alert(course)
alert(price)
alert(goals)

// access 3 var by combining them
let onlinecourse = {
    name : 'Web dev Bootcamp',
    cost: 499,
    goals: [' To Build websites ', ' To understand how web works ']
}
// now access them with .
alert(onlinecourse.cost)
alert(onlinecourse.goals)
alert(onlinecourse.name)

// access the index 1 of goals
alert(goals[1])


function task(goals){
    return goals
}
let print = task(goals)
alert(print)