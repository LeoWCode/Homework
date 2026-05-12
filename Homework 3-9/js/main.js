"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (todo === undefined) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// 1) При помощи метода querySelector получаем элементы .form, .input и .todos
// 2) Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// 3) Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

// ### HomeWork

// 1)
const form = document.querySelector("form");
const input = document.querySelector("input");
const todosList = document.querySelector(".todos");

// 2)
const createTodoElement = (text) => {
  const todo = document.createElement("li");
  todo.classList.add("todo");
  todo.innerHTML = `
        <div class="todo-text">${text}</div>
        <div class="todo-actions">
          <button class="button-complete button">&#10004;</button>
          <button class="button-delete button">&#10006;</button>
        </div>
        `;
  return todo;
};

// 3)

const handleCreateTodo = (todos, text) => {
  createTodo(todos, text);
  todosList.append(createTodoElement(text));

  return todosList;
};
