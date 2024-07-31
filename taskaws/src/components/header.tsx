"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button"

export default function Header() {

  const router = useRouter();

  return (
    <header className="flex justify-center items-center bg-slate-700 h-24">
      <div>
        <h1 className="font-bold text-3xl text-white">NeoTask</h1>
      </div>
      <Button onClick={() => router.push('/novaTask')}>Adicionar nova Task</Button>
    </header>
  );
}