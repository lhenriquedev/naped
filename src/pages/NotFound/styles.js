import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 8rem;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 6rem;
`;
export const TextBox = styled.div`
  max-width: 48rem;

  h1 {
    font-size: 4.8rem;
    line-height: 60px;

    color: var(--white);
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 2rem;
    line-height: 34px;
    color: var(--white-200);
    margin-bottom: 3.2rem;
  }

  button {
    padding: 1rem 2.5rem;
    font-size: 1.8rem;
  }
`;
export const ImageBox = styled.div`
  img {
    width: 100%;
    margin-bottom: 3.2rem;
  }

  h2 {
    max-width: 32rem;
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    line-height: 30px;
    color: var(--white-200);
  }
`;
