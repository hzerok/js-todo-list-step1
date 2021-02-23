const $todoInput = document.getElementById("new-todo-title");
const $todoList = document.getElementById("todo-list");

export function initAddNewTodoItem(){
    $todoInput.addEventListener("keyup", AddNewTodoList); 
}

//새로운 todolist를 생성하여 HTML에 삽입한다. 
export function AddNewTodoList({target, key}){
    const todoTitle = target.value;
    if (key === "Enter" && todoTitle !== "") 
    {
        const inputList = todoTemplate(todoTitle);
        $todoList.insertAdjacentHTML("beforeend", inputList);
        target.value = "";

    }
    countList();
}

export function todoTemplate(title) {
    return ` <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label class="label">${title}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="${title}">
            </li>`;
}

export function countList(){
    document.querySelector("strong").innerText = $todoList.querySelectorAll("li").length;
}