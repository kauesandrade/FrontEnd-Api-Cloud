import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CardTask() {

    return (

        <Card>
            <CardHeader>
                <CardTitle>Nova Task</CardTitle>
                <CardDescription>Adicione uma nova task para você fazer.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>

    );

}