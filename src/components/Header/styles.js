import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 9rem;
`;

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  height: 9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    gap: 6rem;

    a {
      font-size: 1.6rem;
      font-weight: 500;
      color: #c4c4c4;

      text-decoration: none;

      &.active {
        border-bottom: 2px solid #8257e6;
        color: #fefbfb;
      }
    }
  }

  h3 {
    font-size: 2.4rem;
    color: var(--purple-light);
  }

  .button {
    font-size: 1.4rem;
    padding: 0.5rem 1.6rem;
    border: 1px solid #8257e6;
    border-radius: 30px;
    cursor: pointer;
  }

  .btn-mobile-nav {
    border: none;
    background: none;
    cursor: pointer;

    display: none; /*  */
  }

  .icon-mobile {
    width: 4.8rem;
    height: 4.8rem;
    color: var(--purple-light);
  }

  .icon-mobile[name="close-outline"] {
    display: none;
  }

  @media (max-width: 75em) {
    .btn-mobile-nav {
      display: block;
      z-index: 999;
    }

    nav {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;

      display: flex;
      align-items: center;
      justify-content: center;

      /* 1) Hide it visually */
      opacity: 0;
      /* 2) Make it unacessible to mouse and keyboard */
      pointer-events: none;
      /* 3) Hide it from screen readers */
      visibility: hidden;

      ul {
        flex-direction: column;
        gap: 4.8rem;

        a {
          font-size: 3rem;
        }
      }
    }

    .nav-open {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
    }

    .nav-open .icon-mobile-nav[name="close-outline"] {
      display: block;
    }

    .nav-open .icon-mobile-nav[name="menu-outline"] {
      display: none;
    }
  }
`;
