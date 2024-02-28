"use client";

import React from "react";
import Container from "../components/Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter()

  const onSubmit = (values) => {
    console.log(values)

    axios.post("/api/login", values)
      .then((res) => {
        console.log(res.data)
        
        if (res.data.Response === "No existe") {
          return toast.error("No existe usuario")
        }
        
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem("user", JSON.stringify(res.data))
        } else {
          console.log('Web Storage is not supported in this environment.');
        }        
        toast.success(`Bienvenido ${res.data.user}`)
        router.push("/task-list")
      })
      .catch((error) => {
        console.log(error)
        throw new  Error("Error en el servidor")
      })
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 border mt-20 p-8 rounded-md"
        >
          <h2 className=" text-center font-semibold mb-3">Iniciar sesión</h2>
          <input {...register("user")} placeholder="Usuario" className="border p-2 rounded-md" />
          <input {...register("password")} placeholder="Contraseña" className="border p-2 rounded-md" />
          <button type="submit" className="m-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-500">
            Entrar
          </button>
        </form>
      </div>
    </Container>
  );
}
