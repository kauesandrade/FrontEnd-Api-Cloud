'use client';
import ImgCard from "@/components/imgCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Task } from "@/dtos/task";
import { postImage } from "@/service/taskService";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as taskService from "@/service/taskService";

export default function Task() {

  const [task, setTask] = useState({ id: 0, nome: "" });
  const [files, setFiles] = useState([{}])
  const pathname = usePathname()

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getTask();
  }, [task])

  const getTask = async () => {
    await taskService.getTask(pathname).then((response: any) => {
      console.log(response);
      setTask(response.task as Task);
      setFiles(response.files)
    });
  };



  const handleChange = async (event: any) => {

    if (event.target.files && event.target.files[0]) {
      for (var file of event.target.files) {
        const formData = new FormData();
        formData.append('file', file);
        await postImage(task.id, formData);
        getTask();
      }
    }
  };


  return (
    <main>
      <div className="flex align-center justify-center gap-5 px-24 py-5">
        <p className="flex align-center justify-center font-bold text-3xl">Task: {task.nome}</p>
        <Button onClick={() => fileInputRef.current!.click()}>
          Adicionar Arquivo
        </Button>
        <Input className="hidden" onChange={handleChange} type="file" multiple ref={fileInputRef} name="file" id="file"></Input>
      </div>
      <div className="flex flex-wrap gap-1">
        {files.map((file: any, key: any) => (
          <ImgCard key={key}  getTask={getTask} data={file.data} src={file.src} id_file={file.id} id_task={task.id}></ImgCard>
        ))}
      </div>
    </main>
  );
}