import Heart from "../Heart";
import * as S from "./styles";

interface NewsProps {
  body: string | null;
  date?: string;
  title?: string;
}

export default function NewsCard(props: NewsProps) {
  const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  function randomDate(start: Date, end: Date) {
    const generatedDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const day = generatedDate.getDay() != 0 ? generatedDate.getDay() : new Date().getDay();
    const month = months[generatedDate.getMonth()];
    const year = generatedDate.getFullYear();

    return `${day} de ${month}, ${year}`;
  }

  const date = randomDate(new Date(2012, 1, 1), new Date());

  return (
    <S.Container>
      <S.Header>
        <S.Span>{date}</S.Span>
        <Heart />
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
