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
  &:hover {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: pink;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;

export const StyledNavbarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledNavbarLi = styled.li`
  position: relative;
  margin: 0 20px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.active ? "pink" : "transparent")};
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transition: transform 0.3s ease;
  }
`;
