import styled from "styled-components";

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2rem;

  color: var(--white);
`;

export const Hero = styled.div`
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
`;

export const NewsGrid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 90rem 1fr;
  column-gap: 2rem;
`;

export const TextBox = styled.div`
  margin-top: 6.2rem;
  max-width: 49.2rem;

  h1 {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;

    span {
      font-size: 4.8rem;
      line-height: 60px;
    }
  }

  p {
    font-size: 2rem;
    line-height: 32px;
    color: var(--white-200);
  }
`;

export const Grid = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 80rem 1fr;
  grid-template-rows: 25rem 25rem;

  column-gap: 1.6rem;

  figure {
    position: relative;
    overflow: hidden;

    cursor: pointer;

    .category {
      display: inline-block;
      position: absolute;
      top: 5%;
      left: 1%;
      z-index: 10;
      background: var(--purple-light);
      padding: 0.5rem;
      font-size: 1.4rem;
      border-radius: 3px;
      width: 8rem;
      text-align: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px;

      filter: brightness(50%);
      transition: all 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    &:nth-child(1) {
      grid-row: 1 /-1;
    }

    &:nth-child(2) {
      margin-bottom: 1rem;
    }

    .big-text {
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -10%);
      width: 90%;

      font-weight: 700;
      font-size: 2.6rem;
      line-height: 34px;
      color: var(--white);
      text-transform: uppercase;
    }

    .small-text {
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -10%);
      width: 90%;

      font-size: 1.6rem;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
    }

    @media (max-width: 832px) {
      h3 {
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 60rem 1fr;
  }

  @media (max-width: 845px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Content = styled.div`
  max-height: 91.7rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #282830; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--purple-light); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid #282830; /* creates padding around scroll thumb */
  }

  article {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1.8rem;

    & + article {
      margin-top: 3.5rem;
    }
    figure {
      img {
        height: 100%;
        object-fit: cover;
        max-width: 100%;
        filter: brightness(60%);
      }
    }
  }

  @media (max-width: 569px) {
    max-height: 40rem;
  }
`;

export const ContentTextBox = styled.div`
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;

  .title {
    font-size: 1.6rem;
    line-height: 20px;
  }

  .subtitle {
    font-size: 1.3rem;
    color: var(--white-200);
  }

  .date {
    font-size: 1rem;
    color: var(--white-200);
  }

  @media (max-width: 569px) {
    .subtitle {
      display: none;
    }
  }
`;

export const Side = styled.aside`
  @media (max-width: 1100px) {
    margin-top: 5rem;
  }
`;

export const SideContent = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;

  gap: 5rem;

  article {
    figure {
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
        height: 25rem;

        filter: brightness(0.6);
      }

      figcaption {
        position: absolute;
        bottom: 2%;
        left: 0;

        width: 75%;
        padding: 0 2rem;

        font-size: 1.4rem;
        line-height: 1.6;
      }
    }
  }

  @media (max-width: 1100px) {
    margin-top: 5rem;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center;

    article {
      width: 100%;

      figure {
        figcaption {
          width: 100%;
          font-size: 2rem;
        }
      }
    }
  }
`;

export const NewsGridContent = styled.div`
  max-width: 140rem;
  margin: 10rem auto 0;
  padding: 0 2rem;

  article {
    figure {
      position: relative;

      .category {
        display: inline-block;
        position: absolute;
        top: 5%;
        left: 5%;
        z-index: 10;
        background: var(--purple-light);
        padding: 0.5rem;
        font-size: 1.4rem;
        border-radius: 3px;
        width: 8rem;
        text-align: center;
        color: var(--white);
      }

      img {
        width: 100%;
        object-fit: cover;
        height: 25rem;

        filter: brightness(0.6);
      }

      figcaption {
        position: absolute;
        bottom: 2%;
        left: 0;

        width: 100%;
        padding: 0 2rem;
        color: #fff;
        font-size: 1.4rem;
        line-height: 1.6;
      }
    }
  }

  @media (max-width: 1100px) {
    article figure {
      figcaption {
        width: 100%;
        font-size: 2rem;
      }
    }
  }
`;

export const GridContainer = styled.div`
  max-width: 140rem;
  margin: 5rem auto 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 5.2rem;
`;
