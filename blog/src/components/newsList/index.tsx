import { useEffect, useState } from "react";
import { client } from "../../services/hooks/useNews";

export default function NewsList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        client.get("").then(res => {
            setNews(res.data)
        })
    },[])

    console.log(news)

    return (
        <div>
            
        </div>
    );
}



