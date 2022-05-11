import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

export const Form = styled.form`
  margin: 5rem auto 10rem;

  label {
    display: flex;
    align-items: center;
    position: relative;
  }

  input {
    border: none;
    width: 100%;
    padding: 2rem;
    background: var(--gray-200);

    font-size: 2rem;
    line-height: 25px;
    color: #989898;
  }

  svg {
    position: absolute;
    right: 1.5%;
    width: 30px;
    height: 3rem;
    color: #989898;
  }
`;
