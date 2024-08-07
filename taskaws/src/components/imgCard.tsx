import axios from "axios";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";

export default function ImgCard(props: any){

    
const API_URL = "http://localhost:8088/api/cloud/file"

    const deleteImg = async (id_file: number, id_task:number) =>{
        await axios({
            method: 'delete',
            url: API_URL,
            headers: {}, 
            data: {
                id_file: id_file, 
                id_task: id_task
            }
          });
    };

    return(
        <Card>
            <CardHeader className="flex justify-center align-middle w-full">
                <CardDescription>Data: {props.data}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={props.src}></img>
            </CardContent>
            <CardFooter>
                <Button onClick={()=> deleteImg(props.id_file, props.id_task)}>Excluir Imagem</Button>
            </CardFooter>
        </Card>
    );
}