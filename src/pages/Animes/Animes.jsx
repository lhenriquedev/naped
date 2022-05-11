import { Card } from "../../components/Card/Card";
import { SearchBox } from "../../components/SearchBox/SearchBox";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import * as S from "./styles";

export const Animes = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Hero>
          <S.TextBox>
            <h1>Animes</h1>
            <p>O Naped pode ser sua fonte de informações sobre</p>
            <p>o mundo nerd e outros assuntos relacionados.</p>
          </S.TextBox>
          <div className="gradient"></div>
        </S.Hero>

        <SearchBox />

        <S.CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.CardContainer>

        <S.Pagination>
          <button>
            <IoChevronBackOutline />
          </button>

          <div>
            <a className="active" href="">
              1
            </a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <span>...</span>
            <a href="">23</a>
          </div>

          <button>
            <IoChevronForwardOutline />
          </button>
        </S.Pagination>
      </S.Container>
    </S.Wrapper>
  );
};
