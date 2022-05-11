import * as S from "./styles";

import { IoSearch } from "react-icons/io5";

export const SearchBox = () => {
  return (
    <S.Form>
      <label>
        <input type="search" placeholder="Quer ajuda na procura? Pesquise aqui" />
        <IoSearch />
      </label>
    </S.Form>
  );
};
