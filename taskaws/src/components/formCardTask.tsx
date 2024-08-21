'use client';
import { postTask } from "@/service/taskService";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormCardTask() {

    const router = useRouter();
    const [name, setName] = useState("");

    const funcPostTask = () =>{
        if(typeof name === 'string' && name.trim() !== ""){
            postTask(name);
            setName('');
            router.push('/');
        }
    }

    return (

        <Card>
            <CardHeader>
                <CardTitle>Nova Task</CardTitle>
                <CardDescription>Adicione uma nova task para você fazer.</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label>Name</Label>
                            <Input onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" placeholder="Name of your project" required />
                        </div>
                        <Button onClick={()=>funcPostTask()}>Criar Task</Button>
                    </div>
                </div>
            </CardContent>
        </Card>

    );

    // const router = useRouter();

    // const funcPostTask = (e: FormEvent<HTMLFormElement>) =>{
    //     const formData = new FormData(e.currentTarget)
    //     const name = formData.get("name");
    //     if(typeof name === 'string' && name.trim() !== ""){
    //         postTask(name);
    //         router.push('/');
    //     }
    // }



    // return (

    //     <Card>
    //         <CardHeader>
    //             <CardTitle>Nova Task</CardTitle>
    //             <CardDescription>Adicione uma nova task para você fazer.</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //             <form onSubmit={(form) => funcPostTask(form)}>
    //             {/* <form onSubmit={(form) => console.log(form)}> */}
    //                 <div className="grid w-full items-center gap-4">
    //                     <div className="flex flex-col space-y-1.5">
    //                         <Label>Name</Label>
    //                         <Input type="text" name="name" id="name" placeholder="Name of your project" required />
    //                     </div>
    //                     <Button type="submit">Criar Task</Button>
    //                 </div>
    //             </form>
    //         </CardContent>
    //     </Card>

    // );

}