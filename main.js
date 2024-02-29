// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Functions

const addTodo = (e) => {
  e.preventDefault();
  console.log("hello world");
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //   check trash button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash" ></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  // Append to List
  todoList.appendChild(todoDiv);
  //   Clear todo input
  todoInput.value = "";
};

const deleteCheck = (e) => {
  const item = e.target;
  if (item.classList[0] == "trash-btn") {
    item.parentElement.remove();
  }
};

// Event Listeners

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);
