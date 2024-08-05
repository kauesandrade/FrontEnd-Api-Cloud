import axios from "axios"
import { log } from "console"

const API_URL = "http://localhost:8088/api/cloud/task"

export const postTask = async (name: string) =>{

    await axios.post(API_URL, {"nome": name}).then((response) => {
        console.log(response.data);
        return response.data
    })

}

export const getAllTasks = async () =>{
    await axios.get(API_URL).then((response) => {
        console.log(response.data);
        return response.data;
    })
}

export const getTask = async () =>{

    await axios.get(API_URL+'/1').then((response) => {
        console.log(response.data);
        return response.data
    })

}
