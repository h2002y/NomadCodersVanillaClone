const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="🗑";
    button.addEventListener("click", handleTodoDelete);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function HandleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", HandleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos!==null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

function handleTodoDelete(event){
    const li = event.target.parentElement;
    todos=todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}