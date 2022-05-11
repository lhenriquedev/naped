import imageGridOne from "../../assets/image-grid-1.svg";
import imageGridTwo from "../../assets/image-grid-2.svg";
import imageGridThree from "../../assets/image-grid-3.svg";

import * as S from "./styles";

import imageNews1 from "../../assets/images-news-1.svg";
import imageNews2 from "../../assets/images-news-2.svg";
import imageNews3 from "../../assets/images-news-3.svg";
import imageNews4 from "../../assets/images-news-4.svg";
import imageNews5 from "../../assets/images-news-5.svg";
import imageNews6 from "../../assets/images-news-6.svg";
import imageNews7 from "../../assets/images-news-7.svg";
import imageNews8 from "../../assets/images-news-8.svg";

import imageSides1 from "../../assets/images-side-1.svg";
import imageSides2 from "../../assets/images-side-2.svg";
import imageSides3 from "../../assets/images-side-3.svg";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";

export const Home = () => {
  return (
    <S.Container>
      <S.Hero>
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
            <h3 className="big-text">
              The Walking Dead: Maggie vai entrar na Commonwealth pela primeira vez? Nova imagem dá
              pista sobre reta final da série
            </h3>
          </figure>
          <figure>
            <span className="category">Lorem</span>
            <img src={imageGridTwo} alt="" />
            <h3 className="small-text">
              CRIADOR DE ATTACK ON TITAN FAZ ILUSTRAÇÃO EM HOMENAGEM A SPY X FAMILY
            </h3>
          </figure>
          <figure>
            <span className="category">Lorem</span>
            <img src={imageGridThree} alt="" />
            <h3 className="small-text">
              LoL: Mecânica desconhecida pela comunidade aumenta o poder de todos os campeões
            </h3>
          </figure>
        </S.Grid>
      </S.Hero>

      <S.NewsGrid>
        <S.Content>
          <article>
            <figure>
              <img src={imageNews1} alt="" />
            </figure>
            <S.ContentTextBox>
              <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <span className="date">00/00/0000</span>
              <Button>Ler notícia</Button>
            </S.ContentTextBox>
          </article>
          <article>
            <figure>
              <img src={imageNews2} alt="" />
            </figure>
            <S.ContentTextBox>
              <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <span className="date">00/00/0000</span>
              <Button>Ler notícia</Button>
            </S.ContentTextBox>
          </article>
          <article>
            <figure>
              <img src={imageNews3} alt="" />
            </figure>
            <S.ContentTextBox>
              <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <span className="date">00/00/0000</span>
              <Button>Ler notícia</Button>
            </S.ContentTextBox>
          </article>
          <article>
            <figure>
              <img src={imageNews4} alt="" />
            </figure>
            <S.ContentTextBox>
              <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <span className="date">00/00/0000</span>
              <Button>Ler notícia</Button>
            </S.ContentTextBox>
          </article>
          <article>
            <figure>
              <img src={imageNews5} alt="" />
            </figure>
            <S.ContentTextBox>
              <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <span className="date">00/00/0000</span>
              <Button>Ler notícia</Button>
            </S.ContentTextBox>
          </article>

          <article>
            <figure>
              <img src={imageNews1} alt="" />
            </figure>
            <S.ContentTextBox>
              <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </p>
              <span className="date">00/00/0000</span>
              <Button>Ler notícia</Button>
            </S.ContentTextBox>
          </article>
        </S.Content>

        <S.Side>
          <Heading>Notícias</Heading>
          <S.SideContent>
            <article>
              <figure>
                <img src={imageSides1} />
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                  malesuada et velit in, blandit molestie dolor.
                </figcaption>
              </figure>
            </article>

            <article>
              <figure>
                <img src={imageSides2} />
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                  malesuada et velit in, blandit molestie dolor.
                </figcaption>
              </figure>
            </article>

            <article>
              <figure>
                <img src={imageSides3} />
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                  malesuada et velit in, blandit molestie dolor.
                </figcaption>
              </figure>
            </article>
          </S.SideContent>
        </S.Side>
      </S.NewsGrid>

      <S.NewsGridContent>
        <Heading>Notícias mais recentes</Heading>
        <S.GridContainer>
          <article>
            <figure>
              <span className="category">Lorem</span>
              <img src={imageNews6} />
              <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <span className="category">Lorem</span>
              <img src={imageNews7} />
              <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </figcaption>
            </figure>
          </article>

          <article>
            <figure>
              <span className="category">Lorem</span>
              <img src={imageNews8} />
              <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus,
                malesuada et velit in, blandit molestie dolor.
              </figcaption>
            </figure>
          </article>
        </S.GridContainer>
      </S.NewsGridContent>
    </S.Container>
  );
};
