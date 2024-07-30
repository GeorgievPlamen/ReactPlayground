import axios from "axios";
import { useEffect, useState } from "react";
import { IPhoto } from "../models/Photo";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"

const jsonPlaceholder = (path: string) => axios.get(path).then(response => response.data);

async function getPhotos(id: number) {
    const result = await axios.get(`photos/${id}`);
    return result.data;
}

export function usePhotos(id: number) {
const [photo, setPhoto] = useState<IPhoto>();

useEffect(() => {
    async function fetchData() {
        const result = await getPhotos(id);
        setPhoto(result);
    }
    fetchData();
}, [id]);
return photo;
}

const apiAgent = {
    jsonPlaceholder,
    usePhotos,
    getPhotos
}

export default apiAgent