"use client";

import React from "react";
import Container from "../components/Container";
import TodoAdd from "../components/todoAdd/TodoAdd";
import TodoList from "../components/todoList/TodoList";
import { useTodo } from "../hooks/useTodo";
import { useRouter } from "next/navigation";

export default function page() {

  const router = useRouter() 
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo,
  } = useTodo()

  const currentUser = JSON.parse(localStorage.getItem('user'))

  if (!currentUser) {
    return <div className="w-full text-center mt-8 mb-6">
      <p>Acceso denegado!</p>
      <button className="my-4 p-2 bg-slate-200 hover:bg-slate-400 rounded-md" onClick={() => router.push('/login')}>
        Iniciar sesión
      </button>
    </div>
  }

  return (
    <Container>
        <div className="w-[60vw] min-w-[400px] max-w-[900px] text-center p-4 gap-4 border-2 rounded-md mt-10">
          <h1 className="font-bold">Lista de tareas</h1>
        <hr className="my-4 " />
          <div className="flex justify-between">
            <h3>Cantidad de tareas: {todosCount} </h3>
            <h3>Tareas pendientes: {pendingTodosCount} </h3>
          </div>
          <hr className="my-4 " />

          {
            currentUser.rol === 'admin' ? 
              <div className="gap-3 grid grid-cols-1 mt-5">
                <h3 className="">Agregar tarea</h3>
                <TodoAdd handleNewTodo={handleNewTodo} />
              </div> 
            : 
              null
          }

          
          <div className="flex w-full justify-center mt-4">
            <TodoList
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
              handleCompleteTodo={handleCompleteTodo}
            />
          </div>
        </div>
    </Container>
  );
}
