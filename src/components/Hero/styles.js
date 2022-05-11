import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2rem;

  color: var(--white);
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

    h3 {
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -10%);
      width: 90%;

      font-weight: 400;
      font-size: 2.6rem;
      line-height: 34px;
      color: var(--white);
    }

    .small-text {
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -10%);
      width: 90%;
      font-size: 1.6rem;
      line-height: 20px;
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
