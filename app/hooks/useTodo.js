"use client";

import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem('todos')) || [];
    } else {
      console.log("Web Storage is not supported in this environment.");
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const todosCount = todos?.length;
  const pendingTodosCount = todos?.filter((todo) => !todo.done).length;

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      console.log("Web Storage is not supported in this environment.");
    }
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    console.log("LLego a handleNew", todo);

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "Delete Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleCompleteTodo = (id) => {
    const action = {
      type: "Complete Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleUpdateTodo = (id, description) => {
    const action = {
      type: "Update Todo",
      payload: { id, description },
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo,
  };
};
