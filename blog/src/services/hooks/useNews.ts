import axios from "axios";
import { useQuery } from "react-query";


const getNews = async () => {
    const newsApiKey = import.meta.env.VITE_NEWS_ORG_API_KEY;
    const { data } = await axios.get(
        "https://newsapi.org/v2/everything?q=tecnology&sortBy=popularity&apiKey=" + newsApiKey
    )

    return data;
}

export default function useNews() {
    return useQuery("news", getNews)
}