'use client';
import CardTask from "@/components/cardTask";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as taskService from "../service/taskService";

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    await taskService.fetchTasks().then((response: any) => {
      setTasks(response);
    });

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
