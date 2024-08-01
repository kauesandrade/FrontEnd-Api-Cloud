import { postTask } from "@/service/taskService";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

export default function CardTask() {

    const router = useRouter();

    const funcPostTask = (name: string) =>{
        postTask(name);
        router.push('/');
    }

    return (

        <Card>
            <CardHeader>
                <CardTitle>Nova Task</CardTitle>
                <CardDescription>Adicione uma nova task para você fazer.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={(form) => funcPostTask(form.get("name") || "")}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input name="name" id="name" placeholder="Name of your project" />
                        </div>
                        <Button type="submit">Criar Task</Button>
                    </div>
                </form>
            </CardContent>
        </Card>

    );

}