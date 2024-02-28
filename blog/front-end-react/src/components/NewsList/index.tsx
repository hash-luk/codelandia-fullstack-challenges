import { useEffect, useState } from "react";
import { client } from "../../services/hooks/useNews";
import * as S from "./styles";
import NewsCard from "../NewsCard";
import { useSearchContext } from "../../services/contexts/searchContext";
import { generateRandomDates } from "../../services/utils/functions/generateRandomDates";

interface ArticleProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function NewsList() {
  const { searchTerm } = useSearchContext();
  const [news, setNews] = useState<ArticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    client.get("").then((res) => {
      setNews(res.data);
    });

    setIsLoading(false);
  }, []);

  useEffect(() => {
    for (let i = 0; i <= news.length; i++) {
      setDates((dates) => [
        ...dates,
        generateRandomDates(new Date(2012, 1, 1), new Date()),
      ]);
    }
  }, [news]);

  return (
    <S.NewsContainer>
      {isLoading ? (
        <div>Carregando</div>
      ) : news.length === 0 ? (
        <div>Sem resultados</div>
      ) : (
        news
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <NewsCard
              title={item.title}
              body={item.body}
              key={item.id}
              date={dates[item.id]}
              id={item.id}
            />
          ))
      )}
    </S.NewsContainer>
  );
}
