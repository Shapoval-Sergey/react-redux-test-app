import { createAction } from "@reduxjs/toolkit";

const addTodoRequest = createAction("todos/addRequest");
const addTodoSuccess = createAction("todos/addSuccess");
const addTodoError = createAction("todos/addError");

const fetchTodosRequest = createAction("todos/fetchRequest");
const fetchTodosSuccess = createAction("todos/fetchSuccess");
const fetchTodosError = createAction("todos/fetchError");

const removeTodoRequest = createAction("todos/removeRequest");
const removeTodoSuccess = createAction("todos/removeSuccess");
const removeTodoError = createAction("todos/removeError");

const changeFilter = createAction("todos/changeFilter");

export default {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
  changeFilter,
};
