import * as S from "./styles";
import SearchBar from "../search-bar";

export default function Header() {
    return(
        <S.Header>
            <S.HeaderContainer>
                <S.TextContainer>
                    <S.Title>Codelândia</S.Title>
                    <S.Title>blog</S.Title>
                </S.TextContainer>
                <SearchBar />
            </S.HeaderContainer>
        </S.Header>
    );
}