'use client';
import { Input } from "@/components/ui/input";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Task() {

    const API_URL = "http://localhost:8088/api/cloud/task"
    const [task, setTask] = useState({});
    const pathname = usePathname()

  useEffect(() => {
    const fetchTask = async () => {
      try {
        await axios.get(API_URL+pathname).then((response) => {
            console.log(response.data);
            setTask(response.data)
        })
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTask();

  }, [])

    return(
        <main>
            <div>
                <p>Task: {task.nome}</p>
                <Input type="file" name="file" id="file"></Input>
            </div>
            <div>

            </div>
        </main>
    );
}