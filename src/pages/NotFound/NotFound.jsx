import * as S from "./styles";

import notFoundSVG from "../../assets/notfound.svg";
import { Button } from "../../components/Button/Button";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextBox>
          <h1>Tenho más notícias para voce!</h1>
          <p>
            A página que você está procurando pode ter sido removida ou está temporariamente
            indisponível.
          </p>
          <Button>Voltar a home</Button>
        </S.TextBox>

        <S.ImageBox>
          <img src={notFoundSVG} alt="" />
          <h2>Ups! Você chegou no espaço... volte para o mundo nerd!</h2>
        </S.ImageBox>
      </S.Container>
    </S.Wrapper>
  );
};
