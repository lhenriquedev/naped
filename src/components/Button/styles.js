import styled from "styled-components";

export const Button = styled.button`
  background: var(--purple-light);
  padding: 0.8rem 1.6rem;
  width: max-content;

  font-weight: 700;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
