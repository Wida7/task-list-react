
'use client'

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const currentUser = JSON.parse(localStorage.getItem('user'))  

  if (!currentUser) {
    return <div className="w-full text-center mt-8 mb-6">
      <p>Acceso denegado!</p>
      <button className="my-4 p-2 bg-slate-200 hover:bg-slate-400 rounded-md" onClick={() => router.push('/login')}>
        Iniciar sesión
      </button>
    </div>
  } else {
    router.push('/task-list')
  }

  return (
    <div>a</div>
  );
}
