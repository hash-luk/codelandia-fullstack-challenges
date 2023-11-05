import axios from "axios";

const newsApiKey = import.meta.env.VITE_NEWS_ORG_API_KEY;

export const client = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?country=br&category=technology&pageSize=13&apiKey=" + newsApiKey
})