'use client';
import ImgCard from "@/components/imgCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postImage } from "@/service/taskService";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export default function Task() {

  const API_URL = "http://localhost:8088/api/cloud/task"
  const [task, setTask] = useState({});
  const [files, setFiles] = useState([{}])
  const pathname = usePathname()

  const fileInputRef = useRef();

  useEffect(() => {
    getTask();
  }, [])

  const getTask = async () => {
    try {
      await axios.get(API_URL + pathname).then((response) => {
        console.log(response.data);
        setTask(response.data.task);
        setFiles(response.data.files)
      })
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };



  const handleChange = async (event) => {

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
        <Button onClick={() => fileInputRef.current.click()}>
          Adicionar Arquivo
        </Button>
        <Input className="hidden" onChange={handleChange} type="file" multiple ref={fileInputRef}  name="file" id="file"></Input>
      </div>
      <div className="flex flex-wrap gap-1">
        {files.map((file: any) => (
          <ImgCard getTask={getTask} data={file.data} src={file.src} id_file={file.id} id_task={task.id}></ImgCard>
        ))}
      </div>
    </main>
  );
}