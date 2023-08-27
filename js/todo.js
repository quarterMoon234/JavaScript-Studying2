const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const localStorageToDo = "todo";

let todoSave = [];

function todoDelete(event){
  const li = event.target.parentElement;
  li.remove();
  todoSave = todoSave.filter(item => item.id !== parseInt(li.id));                          // li을 지움과 동시에 스토리지에서 제거
  localStorage.setItem(localStorageToDo, JSON.stringify(todoSave));
}

function todoCreateList(recieveToDo){ //3. 리스트 출력 작동 
  const li = document.createElement("li");
  li.id = recieveToDo.id;
  const span = document.createElement("span");
  span.innerText = recieveToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoInputFunction(event){ //2. 목표 제출시 작동 
  event.preventDefault(); 
  const newToDo = todoInput.value; // 값 저장
  todoInput.value = "";
  const newToDoOJ = {
    text: newToDo,
    id: Date.now(),
  };
  todoSave.push(newToDoOJ); 
  localStorage.setItem(localStorageToDo, JSON.stringify(todoSave)); // 배열을 텍스트 형태 스토리지에 저장
  todoCreateList(newToDoOJ); //리스트 출력 시작
}

todoForm.addEventListener("submit", todoInputFunction); //1. 목표 제출 

const savedTodo = localStorage.getItem(localStorageToDo); // 2-3에서 스토리지에 저장한 값을 선언

if(savedTodo !== null){ // 스토리지가 비어있지 않을 경우 작동
  const parseToDo = JSON.parse(savedTodo); // 2-3에서 텍스트 형태로 스토리지에 저장한 값을 다시 코드로 불러옴.
  todoSave = parseToDo; 
  todoSave.forEach(todoCreateList);
}


