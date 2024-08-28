'use server';
import axios from "axios"

const API_URL_TASK = "http://localhost:8089/api/cloud/task"
const API_URL_FILE = "http://localhost:8089/api/cloud/file"


export const postTask = async (name: string) => {

    await axios.post(API_URL_TASK, { "nome": name }).then((response) => {
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


export const deleteImg = async (id_file: number, id_task: number) => {
    await axios({
        method: 'delete',
        url: API_URL_FILE,
        headers: {},
        data: {
            id_file: id_file,
            id_task: id_task
        }
    });
};

export const deleteTask = async (id: number) => {
    await axios.delete(API_URL_TASK + "/" + id);
}

export const getTask = async (pathname: string) => {
    try {
        const response = await axios.get(API_URL_TASK + pathname);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

export const fetchTasks = async () => {
    try {
        const response = await axios.get(API_URL_TASK)
        return response.data;

    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};
