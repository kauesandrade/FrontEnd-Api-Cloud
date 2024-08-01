"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button"

export default function Header() {

  const router = useRouter();

  return (
    <header className="flex justify-between items-center bg-slate-700 h-24 p-4">
      <div className="w-1/3"></div>
      <div>
        <h1 className=" w-1/3 font-bold text-3xl text-white cursor-pointer" onClick={() => router.push('/')}>NeoTask</h1>
      </div>
      <div className="flex justify-end w-1/3">
        <Button onClick={() => router.push('/novaTask')}>Adicionar nova Task</Button>
      </div>
    </header>
  );
}