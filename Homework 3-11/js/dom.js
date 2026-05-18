import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const todosList = document.querySelector(".todos");

const createTodoElement = (todos) => {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.id = todos[todoKeys.id];
  todoElement.innerHTML = `
  <div class="todo-text">${todos[todoKeys.text]}</div>
  <div class="todo-actions">
    <button class="button-complete button">&#10004;</button>
    <button class="button-delete button">&#10006;</button>
  </div>
  `;
  return todoElement;
};

export const renderTodos = (todos) => {
  todosList.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    todosList.prepend(todoElement);
  });
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  setTodosToLocalStorage(todos);
  todosList.prepend(todoElement);
};

export const initTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    handleCreateTodo(todos, text);
    input.value = "";
  });

  todosList.addEventListener("click", ({ target }) => {
    const todo = target.closest(".todo");
    if (!todo) return;

    const todoId = Number(todo.dataset.id);

    if (target.matches(".button-complete")) {
      completeTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }

    if (target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
