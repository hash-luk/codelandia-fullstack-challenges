import axios from "axios";

export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts?_limit=30"
})