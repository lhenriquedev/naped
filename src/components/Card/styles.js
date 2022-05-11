import styled from "styled-components";

import cardImage from "../../assets/images-news-1.svg";

export const Card = styled.article`
  position: relative;

  height: 30rem;

  background: url(${cardImage});
  background-size: cover;
  background-position: center;

  p {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    width: 100%;

    font-size: 1.4rem;
    line-height: 20px;
    padding: 0 2rem;
    color: var(--white);
  }

  .gradient {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(360deg, #13131f 0.01%, rgba(19, 19, 31, 0) 99.99%);
  }
`;
