import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import axios from "axios";

export default function CardTask(props: any){

    const API_URL = "http://localhost:8088/api/cloud/task/"

    const router = useRouter();

    const deleteTask = async () =>{
        await axios.delete(API_URL+props.data.id);
        props.fetchTasks();
    }

    return(
        <Card className="w-52 h-40">
            <CardHeader onClick={() => router.push('/'+props.data.id)} className="flex justify-center align-middle w-full">
                <CardTitle className="text-wrap break-words text-ellipsis overflow-hidden w-full">{props.data.nome}</CardTitle>
                <CardDescription>id: {props.data.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => deleteTask()}>Deletar Task</Button>
            </CardContent>
        </Card>
    );
}