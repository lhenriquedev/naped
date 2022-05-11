import styled from "styled-components";

export const HeadingTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 2.4rem;
  color: var(--white);

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    border-bottom: 3px solid var(--purple-light);
  }
`;
