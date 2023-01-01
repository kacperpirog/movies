import Tooltip from "@mui/material/Tooltip";
import React, { useContext } from "react";
import AppContext from "../../Context";
import {
  StyledDiv,
  StyledButton,
  StyledDivButton,
} from "./StyledMovieListItem";

const MovieListItem = ({ title, poster_path, id }) => {
  const { addToFavMovies, baseImgUrl, favMovies, deleteFavMovies } =
    useContext(AppContext);

  let isInFavMuvies;
  favMovies.forEach((e) => {
    if (e.id === id) {
      isInFavMuvies = true;
    }
  });

  return (
    <>
      <StyledDiv>
        <ul>
          <li key={id}>
            <div>
              <img src={`${baseImgUrl}${poster_path}`} alt={title}></img>
              <StyledDivButton>
                <StyledButton>
                  {isInFavMuvies ? (
                    <Tooltip
                      title="remove from favorites"
                      placement="right"
                      arrow
                      onClick={() => deleteFavMovies(id)}
                    >
                      <h3>-</h3>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      title="add to favorites"
                      placement="right"
                      arrow
                      onClick={() => addToFavMovies(id)}
                    >
                      <h3>+</h3>
                    </Tooltip>
                  )}
                </StyledButton>
              </StyledDivButton>
            </div>
            <h5>{title}</h5>
          </li>
        </ul>
      </StyledDiv>
    </>
  );
};

export default MovieListItem;
