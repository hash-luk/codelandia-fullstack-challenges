import { useEffect, useState } from "react";
import { client } from "../../services/hooks/useNews";
import * as S from "./styles";
import NewsCard from "../NewsCard";
import { useSearchContext } from "../../services/contexts/searchContext";

interface ArticleProps {
    userId: number
    id: number,
    title: string,
    body: string
}

export default function NewsList() {
    const { searchTerm } = useSearchContext();
    const [news, setNews] = useState<ArticleProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client.get("").then(res => {
            setNews(res.data)
        })
        setIsLoading(false)
    },[])

    const filteredItems = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
        <S.NewsContainer>
            {isLoading ? <div>Carregango</div> : filteredItems.map(news => {
                return(
                    <NewsCard title={news.title} body={news.body} key={news.id}/>
                )
            })}
        </S.NewsContainer>
    );
}