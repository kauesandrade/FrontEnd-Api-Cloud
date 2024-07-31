"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button"

export default function Header() {

    const router = useRouter();

    return (
        <header>
        <div>
          <p>NeoTask</p>
        </div>
        <Button onClick={()=> router.push('/novaTask')}>Adicionar nova Task</Button>
      </header>
    );
  }