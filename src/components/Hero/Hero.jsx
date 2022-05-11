import * as S from "./styles";

import imageGridOne from "../../assets/image-grid-1.svg";
import imageGridTwo from "../../assets/image-grid-2.svg";
import imageGridThree from "../../assets/image-grid-3.svg";

export const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TextBox>
          <h1>
            <span>Mundo nerd? </span>
            <span>Naped!</span>
          </h1>
          <p>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos
            relacionados.
          </p>
        </S.TextBox>

        <S.Grid>
          <figure>
            <span className="category">Lorem</span>
            <img src={imageGridOne} alt="" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime nostrum at
              obcaecati, facere tempora, natus possimus, deserun
            </h3>
          </figure>
          <figure>
            <span className="category">Lorem</span>
            <img src={imageGridTwo} alt="" />
            <h3 className="small-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime nostrum at
              obcaecati
            </h3>
          </figure>
          <figure>
            <span className="category">Lorem</span>
            <img src={imageGridThree} alt="" />
            <h3 className="small-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime nostrum at
              obcaecati
            </h3>
          </figure>
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
};
