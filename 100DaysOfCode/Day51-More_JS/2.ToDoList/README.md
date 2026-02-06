# ToDo List Project - Step-by-Step Guide

Welcome to the ToDo List project! This guide will help you build a fully functional ToDo List
from scratch using HTML, CSS, and JavaScript.

## 1. Project Setup (HTML)

First, create a basic `index.html` file. We need to set up our fonts and icons.

### **Add Google Fonts (Poppins)**
Go to [Google Fonts](https://fonts.google.com/), search for "Poppins", select the weights you like (e.g., 400, 500, 600), and copy the `<link>` tag. Paste it into your `<head>`.

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```

### **Add Font Awesome (Icons)**
We need icons for the "Check" and "Trash" buttons. Go to [Font Awesome CDN](https://cdnjs.com/libraries/font-awesome), copy the first link (the `all.min.css` version), and paste it in your `<head>`.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

### **Basic Structure**
Create the header, the form for input, and the container where our list items will go.

```html
<body>
    <header>
        <h1>Todo List</h1>
    </header>
    <form>
        <input type="text" class="todolist-input">
        <button class="todolist-button" type="submit">
            <i class="fa-solid fa-plus-square"></i>
        </button>
    </form>
    <div class="todo-container">
        <ul class="todo-list"></ul>
    </div>
    <script src="app.js"></script>
</body>
```

---

## 2. Styling (CSS)

Now, let's make it look good. Create a `style.css` file.

### **Reset & Body**
Remove default Browser styles and add a nice gradient background.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-image: linear-gradient(120deg, #7377d8, #825d86);
    color: white;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
}
```

### **Header & Form Layout**
Center everything using Flexbox.

```css
header {
    font-size: 1.5rem;
}

header, form {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### **Form Elements**
Style the input and button to look seamless.

```css
form input, form button {
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
    height: 50px;
}

form input {
    border-radius: 5px 0 0 5px;
    outline: none;
    width: 60%;
    padding-left: 1rem;
}

form button {
    border-radius: 0 5px 5px 0;
    width: 50px;
    cursor: pointer;
    color: #d88771;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

form button:hover {
    background: #d88771;
    color: white;
}
```

### **ToDo List Styling**
Style the actual list items and the check/delete buttons.

```css
.todo {
    margin: 0.5rem;
    background: white;
    color: black;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease;
}

.todo li {
    flex: 1;
    padding: 0rem 0.5rem;
}

.trash-btn, .complete-btn {
    background: #ff6f47;
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
}

/* Fix for clicking icons */
.trash-btn i, .complete-btn i {
    pointer-events: none;
}

.complete-btn {
    background: rgb(73, 204, 73);
}
```

### **Animations & Effects**
Add classes for when an item is completed or deleted.

```css
.completed {
    text-decoration: line-through;
    opacity: 0.5;
}

.fall {
    transform: translateY(8rem) rotateZ(20deg);
    opacity: 0;
}
```

---

## 3. Generating Todos (JavaScript)

Create `app.js` to handle the logic.

### **Selectors & Event Listeners**
Select the elements we need and listen for clicks.

```javascript
const ToDoInput = document.querySelector('.todolist-input');
const ToDoButton = document.querySelector('.todolist-button');
const ToDoList = document.querySelector('.todo-list');

ToDoButton.addEventListener('click', addTodo);
ToDoList.addEventListener('click', deleteCheck);
```

### **1. Function: Add Todo**
This function will generate the HTML for a new Todo Item when the button is clicked.

```javascript
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Check if input is empty
    if (ToDoInput.value === "") return;

    // Create Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = ToDoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Create CHECK MARK Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Create TRASH Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('trash-btn');
    todoDiv.appendChild(deleteButton);

    // Append to List
    ToDoList.appendChild(todoDiv);

    // Clear Input value
    ToDoInput.value = "";
}
```

### **2. Function: Delete & Check**
This function handles what happens when you click the Check or Trash buttons on a list item.

```javascript
function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        // Remove element AFTER animation
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // CHECK MARK
    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
```

---

**That's it!** You now have a fully working ToDo list with animations. 