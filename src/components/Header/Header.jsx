import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h3>Naped</h3>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/animes">Animes</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Filmes</NavLink>
            </li>
            <li>
              <NavLink to="/series">Series</NavLink>
            </li>
            <li>
              <NavLink to="/games">Games</NavLink>
            </li>

            <li>
              <a className="button">Minha conta</a>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav">
          <IoMenuOutline className="icon-mobile" name="menu-outline" />
          <IoCloseOutline className="icon-mobile" name="close-outline" />
        </button>
      </S.Container>
    </S.Wrapper>
  );
};
