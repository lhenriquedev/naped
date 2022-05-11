import styled from "styled-components";

import imageHero from "../../assets/capa.svg";

export const Wrapper = styled.div`
  margin: 5rem 0;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Hero = styled.div`
  position: relative;
  height: 40vh;

  background: url(${imageHero});
  background-size: cover;
  background-position: 50% 50%;

  .gradient {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(90deg, #13131f 0.01%, rgba(19, 19, 31, 0) 99.99%);
  }
`;
export const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding-top: 8rem;
  padding-left: 5rem;
  max-width: 60rem;
  z-index: 100;

  h1 {
    font-size: 4.8rem;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    font-size: 2rem;
    line-height: 32px;
    color: var(--white-200);
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5.2rem;
`;

export const Pagination = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  button {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 3px;
    background: #282830;
    border: none;
    cursor: pointer;

    svg {
      font-size: 2rem;
      color: #545454;

      &:hover {
        color: var(--purple-light);
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: var(--white-200);

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-200);

      width: 3.2rem;
      height: 3.2rem;
      border-radius: 3px;
      background: #282830;
      font-size: 1.8rem;
      text-decoration: none;
      text-align: center;

      &.active {
        border: 1px solid var(--purple-light);
        color: var(--purple-light);
      }
    }

    span {
      font-size: 1.8rem;
    }
  }
`;
