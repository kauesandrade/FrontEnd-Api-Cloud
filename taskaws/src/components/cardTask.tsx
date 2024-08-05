import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

export default function CardTask(props: any){

    const router = useRouter();

    return(
        <Card onClick={() => router.push('/'+props.data.id)} className="flex w-52 h-32">
            <CardHeader className="flex justify-center align-middle w-full">
                <CardTitle className="text-wrap break-words text-ellipsis overflow-hidden w-full">{props.data.nome}</CardTitle>
                <CardDescription>id: {props.data.id}</CardDescription>
            </CardHeader>
        </Card>
    );
}