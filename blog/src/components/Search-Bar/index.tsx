import * as S from "./styles";
import { useSearchContext } from "../../services/contexts/searchContext";
import searchIcon from "../../assets/icons/search.svg";

export default function SearchBar() {
  const { searchTerm, updateSearchTerm } = useSearchContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(e.target.value);
  };

  return (
    <S.SearchbarContainer>
      <S.Icon src={searchIcon} alt="Ícone de lupa branco" />
      <S.Input placeholder="Pesquisar no blog" value={searchTerm} onChange={handleSearch}/>
    </S.SearchbarContainer>
  );
}
