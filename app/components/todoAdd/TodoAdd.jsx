import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineAddBox } from "react-icons/md";
import { useForm } from 'react-hook-form';

export default function TodoAdd({ handleNewTodo }) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleAdd = (e) => {
    if (e.task) {
      let newTodo = {
        id: new Date().getTime(),
        description: e.task,
        done: false
      }
      console.log("handleAdd");
      
      handleNewTodo(newTodo)
    }
  } 

  const onSubmit = values => {
    console.log(values)
    if (values) {
      let newTodo = {
        id: new Date().getTime(),
        description: values.Task,
        done: false
      }
      console.log("handleAdd");
      
      handleNewTodo(newTodo)
      reset()
      console.log(register);
    }
  };
  

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full relative">
          <input
            autoComplete="off"
            type="text"
            className="
            peer w-full p-4 pt-6 outline-none
            border-2 rounded-t-md transition
        "
            name="description"
            placeholder=""
            {...register("Task", {required: true, maxLength: 200})}
          />
          <label
            className="
            absolute cursor-text text-md duration-150 transform 
            -translate-y-3 top-5 z-10 origin-[0] left-4 
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-4
            peer-focus:text-slate-300
        "
          >
            Escribe la tarea
          </label>
        </div>

        <button
          type="submit"
          className="
          bg-slate-200 border-2 rounded-b-md 
            w-full hover:bg-slate-300 hover:border-slate-300 flex 
            gap-2 items-center 
            justify-center h-12
          "
					onClick={() => {
            toast.success('Tarea agregada')
          }}
        >
          <MdOutlineAddBox size={20} />
          Agregar tarea
        </button>
      </form>
    </div>
  );
}
