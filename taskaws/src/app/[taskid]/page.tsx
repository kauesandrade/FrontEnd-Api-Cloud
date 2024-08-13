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
      <div>
        <p>Task: {task.nome}</p>
          <Input onChange={handleChange} type="file" multiple name="file" id="file"></Input>
      </div>
      <div className="flex flex-wrap gap-1">
        {files.map((file: any) => (
          <ImgCard getTask={getTask} data={file.data} src={file.src} id_file={file.id} id_task={task.id}></ImgCard>
        ))}
      </div>
    </main>
  );
}