import { useState } from "react";
import Heart from "../Heart";
import * as S from "./styles";

interface NewsProps {
  id: number;
  body: string | null;
  date?: string;
  title?: string;
}

interface LikeState {
  [newsId: number]: boolean;
}

export default function NewsCard(props: NewsProps) {

  const [likes, setLikes] = useState<LikeState>({});


  const handleLikeDislike = (newsId: number, isLiked: boolean) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [newsId]: isLiked,
    }));
  };

  return (
    <S.Container>
      <S.Header>
        <S.Span>{props.date}</S.Span>
        <Heart isLiked={likes[props.id] || false} onLikeDislike={(isLiked) => handleLikeDislike(props.id, isLiked)}/>
      </S.Header>
      <S.TextWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Span type="description">
          {props.body ??
            "Suspendisse blandit dolor at nibh imperdiet bibendum ut id mi. Cras ultrices mi a varius vestibulum. Vestibulum id orci ornare, blandit orci vitae, accumsan ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nisi orci, scelerisque eu hendrerit blandit, mattis aliquam dolor. Nam tempor nunc sit amet nisl eleifend dignissim. Phasellus sit amet sem eget enim gravida lobortis. Vivamus posuere purus ut condimentum vestibulum."}
        </S.Span>
      </S.TextWrapper>
    </S.Container>
  );
}
