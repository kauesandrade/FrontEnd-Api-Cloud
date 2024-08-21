'use client';
import axios from "axios";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import * as taskService from "../service/taskService";

export default function ImgCard(props: any){

const deleteImg = async (id_file: number, id_task:number) =>{
    await taskService.deleteImg(id_file, id_task);
    await props.getTask();
};

    return(
        <Card className="w-72">
            <CardHeader className="flex justify-center align-middle w-full">
                <CardDescription>Data: {props.data}</CardDescription>
            </CardHeader>
            <CardContent>
                <img className="w-72 h-72" src={props.src || ""} alt=""></img>
            </CardContent>
            <CardFooter>
                <Button onClick={()=> deleteImg(props.id_file, props.id_task)}>Excluir Imagem</Button>
            </CardFooter>
        </Card>
    );
}