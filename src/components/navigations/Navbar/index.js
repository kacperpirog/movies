import React, { useState } from "react";
import { StyledLink } from "../../MovieListItem/StyledMovieListItem";

import { StyledNavbarUl, NavWrapper, StyledNavbarLi } from "./styledNavbar";

const Nav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <NavWrapper>
      <StyledNavbarUl className="menu-bar">
        <StyledNavbarLi
          active={activeItem === 0}
          onClick={() => handleItemClick(0)}
        >
          <StyledLink exact to="/" activeClassName="active">
            HOME
          </StyledLink>
        </StyledNavbarLi>
        <StyledNavbarLi
          active={activeItem === 1}
          onClick={() => handleItemClick(1)}
        >
          <StyledLink to="/FavMovies" activeClassName="active">
            FAVORITE MOVIES
          </StyledLink>
        </StyledNavbarLi>
      </StyledNavbarUl>
    </NavWrapper>
  );
};
export default Nav;
