import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"


// const responseBody = (response: AxiosResponse) => response.data;

const jsonPlaceholder = (path: string) => axios.get(path).then(response => response.data);

const photos = (id: number)=> axios.get(`photos/${id}`).then(response => response.data)

const apiAgent = {
    jsonPlaceholder,
    photos
}

export default apiAgent