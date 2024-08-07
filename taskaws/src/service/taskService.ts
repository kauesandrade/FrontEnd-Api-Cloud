import axios from "axios"
import { headers } from "next/headers"

const API_URL_TASK = "http://localhost:8088/api/cloud/task"
const API_URL_FILE = "http://localhost:8088/api/cloud/file"

export const postTask = async (name: string) =>{

    await axios.post(API_URL_TASK, {"nome": name}).then((response) => {
        console.log(response.data);
        return response.data
    })

}

export const postImage = async (id_task: number, file: FormData) => {
    try {
        await axios.post(API_URL_FILE, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            params: {
                id: id_task
            }
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; // Optionally rethrow the error for further handling
    }
};
