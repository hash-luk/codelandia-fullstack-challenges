import { useEffect, useState } from "react";
import { client } from "../../services/hooks/useNews";
import * as S from "./styles";
import NewsCard from "../NewsCard";

interface ArticleProps {
    publishedAt: string,
    title?: string,
    description: string | null
}

export default function NewsList() {
    const [news, setNews] = useState<ArticleProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client.get("").then(res => {
            setNews(res.data.articles)
        })
        setIsLoading(false)
    },[])

    return (
        <S.NewsContainer>
            {isLoading ? <div>Carregango</div> : news.map((newsObj, index) => {
                let date = new Date(newsObj.publishedAt);
                console.log(date.toLocaleDateString());
                return(
                    <NewsCard date={newsObj.publishedAt} title={newsObj.title} content={newsObj.description} key={index}/>
                )
            })}
        </S.NewsContainer>
    );
}



