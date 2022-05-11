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

import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

export const News = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <article>
            <figure>
              <img src={imageNews1} alt="" />
            </figure>
            <S.TextBox>
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
            </S.TextBox>
          </article>

          <article>
            <figure>
              <img src={imageNews2} alt="" />
            </figure>
            <S.TextBox>
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
            </S.TextBox>
          </article>

          <article>
            <figure>
              <img src={imageNews3} alt="" />
            </figure>
            <S.TextBox>
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
            </S.TextBox>
          </article>

          <article>
            <figure>
              <img src={imageNews4} alt="" />
            </figure>
            <S.TextBox>
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
            </S.TextBox>
          </article>

          <article>
            <figure>
              <img src={imageNews3} alt="" />
            </figure>
            <S.TextBox>
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
            </S.TextBox>
          </article>

          <article>
            <figure>
              <img src={imageNews1} alt="" />
            </figure>
            <S.TextBox>
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
            </S.TextBox>
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
      </S.Container>

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
    </S.Wrapper>
  );
};
