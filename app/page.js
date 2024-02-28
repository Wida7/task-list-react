
'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  if (!currentUser) {
    return <div className="w-full text-center my-12">
      <p>Inicia sesión para acceder a la lista de tareas</p>
      <button className="my-8 p-2 bg-slate-200 hover:bg-slate-400 rounded-md" onClick={() => router.push('/login')}>
        Iniciar sesión
      </button>
    </div>
  } else {
    router.push('/task-list')
  }

  return (
    <></>
  );
}
