'use client';
import CardTask from "@/components/cardTask";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:8088/api/cloud/task"

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    try {
      await axios.get(API_URL).then((response) => {
        console.log(response.data);
        setTasks(response.data);
    })
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-wrap gap-1">
        {tasks.map((task: any) => (
          <CardTask fetchTasks={fetchTasks} key={task.id} data={task} />
        ))}
      </div>
    </main>
  );
}
