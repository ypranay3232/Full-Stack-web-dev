// 1. Remove the require line - it breaks the browser script
const ToDoInput = document.querySelector('.todolist-input');
const ToDoButton = document.querySelector('.todolist-button');
const ToDoList = document.querySelector('.todo-list');

// Event Listeners
ToDoButton.addEventListener('click', addTodo);
ToDoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
    event.preventDefault();

    // Prevent adding empty tasks
    if (ToDoInput.value === "") return;

    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    // Set text to what the user actually typed
    newTodo.innerText = ToDoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check Mark button 
    const completedButton = document.createElement('button');
    // Use innerHTML so the <i> tag is rendered as an icon
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Delete button 
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('trash-btn');
    todoDiv.appendChild(deleteButton);

    // Append to List
    ToDoList.appendChild(todoDiv);

    // Clear Input value
    ToDoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        // Remove after animation ends
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    // CHECK MARK
    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}