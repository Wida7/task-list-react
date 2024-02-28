import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";

export default function TodoUpdate({ todo, handleUpdateTodo }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmit = (values) => {
    console.log(values);
    handleUpdateTodo(todo.id, values.Task);
  };

  return (
    <div className=" flex w-full items-center text-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full flex justify-between ${
          todo?.done ? "line-through" : ""
        } `}
      >
        <input
          className={`p-2 disabled:bg-white ${
            disabled ? "" : " border-slate-600 border-2 rounded-md"
          }`}
          autoComplete="off"
          type="text"
          name="todo.description"
          defaultValue={todo.description}
          disabled={disabled}
          {...register("Task", { required: true, maxLength: 200 })}
        />
        {currentUser?.rol === "admin" ? (
          <button
            type="submit"
            onClick={() => setDisabled(!disabled)}
            className={`items-center mr-2 ${todo?.done ? "cursor-not-allowed" : ""}`}
            disabled={todo?.done}
          >
            <FiEdit />
          </button>
        ) : null}
      </form>
    </div>
  );
}
