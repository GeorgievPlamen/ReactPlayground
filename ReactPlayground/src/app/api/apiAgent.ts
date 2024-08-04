import axios from "axios";
import { IPhoto } from "../models/Photo";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"

let status = "pending";
let result: IPhoto;

function fetchPhotos(id: number) {
    const fetching = axios.get(`photos/${id}`)
        .then(response => {status = 'fulfilled'; result = response.data})
        .catch(error => {status = 'rejected'; result = error});
       
    
    return () => {
        if (status === "pending") throw fetching
        else if (status === "rejected") throw Error(result.title)
        else if (status === 'fulfilled') return result;
    }
}

const apiAgent = {
    fetchPhotos
}

export default apiAgent;