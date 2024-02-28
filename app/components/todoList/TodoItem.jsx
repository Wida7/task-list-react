import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import TodoUpdate from "../todoUpdate/TodoUpdate";
import toast from "react-hot-toast";

export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCompleteTodo,
}) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [completed, setCompleted] = useState(todo.done);

  return (
    <li className="flex w-full justify-between items-center">
      <span
        onClick={() => {
          handleCompleteTodo(todo.id),
            todo.done ? null : toast.success("Tarea completada"),
            setCompleted(!todo.done);
        }}
      >
        <div
          className={`rounded-full border-2 border-slate-400 w-[18px] h-[18px] ${
            completed ? "bg-slate-300" : ""
          }`}
        ></div>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      {currentUser.rol === "admin" ? (
        <>
          <button
            onClick={() => {
              handleDeleteTodo(todo.id), toast.success("Tarea eliminada");
            }}
          >
            <RiDeleteBin6Line />
          </button>
        </>
      ) : null}
    </li>
  );
}
