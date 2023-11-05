import * as S from "./styles";

interface NewsProps {
  content: string | null;
  date?: string;
  title?: string;
}

export default function NewsCard(props: NewsProps) {
  function correctDate(date?: string) {
    if (date) {
      return new Date(date).toLocaleDateString();
    }
  }

  const date = correctDate(props.date);

  return (
    <S.Container>
      <S.Header>
        <S.Span>{date}</S.Span>
        💜
      </S.Header>
      <S.TextWrapper>
        <S.Title>{props.title}</S.Title>
        <S.Span type="description">
          {props.content ??
            "Suspendisse blandit dolor at nibh imperdiet bibendum ut id mi. Cras ultrices mi a varius vestibulum. Vestibulum id orci ornare, blandit orci vitae, accumsan ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nisi orci, scelerisque eu hendrerit blandit, mattis aliquam dolor. Nam tempor nunc sit amet nisl eleifend dignissim. Phasellus sit amet sem eget enim gravida lobortis. Vivamus posuere purus ut condimentum vestibulum."}
        </S.Span>
      </S.TextWrapper>
    </S.Container>
  );
}
