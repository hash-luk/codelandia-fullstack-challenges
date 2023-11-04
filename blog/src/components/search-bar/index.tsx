import * as S from "./styles";
import searchIcon from "../../assets/icons/search.svg";


export default function SearchBar() {
    return(
        <S.SearchbarContainer>
            <S.Icon src={searchIcon} alt="Ícone de lupa branco"/>
            <S.Input placeholder="Pesquisar no blog"/>
        </S.SearchbarContainer>
    )
}