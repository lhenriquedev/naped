import styled from "styled-components";

export const Wrapper = styled.footer`
  margin: 5rem 0;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2.4rem;
    color: var(--purple-light);
  }

  p {
    font-size: 1.6rem;
    color: var(--white);
  }
`;
