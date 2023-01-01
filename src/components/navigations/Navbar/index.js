import React from "react";
import { StyledLink } from "../../MovieListItem/StyledMovieListItem";

import { StyledNavbarUl, NavWrapper } from "./styledNavbar";

const Nav = () => {
  return (
    <NavWrapper>
      <StyledNavbarUl className="menu-bar">
        <li>
          <StyledLink to="/">HOME</StyledLink>
        </li>
        <li>
          <StyledLink to="/FavMovies">FAVORITE MOVIES</StyledLink>
        </li>
      </StyledNavbarUl>
    </NavWrapper>
  );
};

export default Nav;
