import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCompleteTodo,
}) {
  return <>
    {todos.length === 0 ? <p className="my-8 font-semibold">No hay tareas disponibles, puedes crearlas con el usuario admin</p> : <ul className="list-disc w-5/6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>}
    
  </>
}
