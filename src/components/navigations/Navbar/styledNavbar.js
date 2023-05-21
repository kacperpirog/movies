import styled from "styled-components";
import { Link } from "react-router-dom";

// export const StyledLink = styled(Link)`
//   display: flex;
// `;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const StyledNavbarUl = styled.ul`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  margin: 50px 0 0 0;
  li {
    list-style: none;
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
    padding: 4px 12px;
    margin: 0 8px;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      transition: 0.2s;
    }
    &:hover {
      &::before {
        background: linear-gradient(to bottom, #e8edec, #d2d1d3);
        box-shadow: 0px 3px 20px 0px black;
        transform: scale(1.2);
      }
    }
  }
`;
