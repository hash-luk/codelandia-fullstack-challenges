import { useEffect, useState } from "react";
import { client } from "../../services/hooks/useNews";
import * as S from "./styles";
import NewsCard from "../NewsCard";

interface ArticleProps {
    userId: number
    id: number,
    title: string,
    body: string
}

export default function NewsList() {
    const [news, setNews] = useState<ArticleProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client.get("").then(res => {
            setNews(res.data)
        })
        setIsLoading(false)
    },[])

    return (
        <S.NewsContainer>
            {isLoading ? <div>Carregango</div> : news.map(news => {
                return(
                    <NewsCard title={news.title} content={news.body} key={news.id}/>
                )
            })}
        </S.NewsContainer>
    );
}