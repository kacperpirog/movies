import React, { useContext } from "react";
import AppContext from "../../Context";
import MovieListItem from "../MovieListItem";
import { StyledUlMovies, StyledLimovies } from "./StyledMoviesList";

const MoviesList = () => {
  const context = useContext(AppContext);
  return (
    <StyledUlMovies>
      {context.movies.map((movie) => {
        return (
          <StyledLimovies key={movie.id}>
            <MovieListItem {...movie} />
          </StyledLimovies>
        );
      })}
    </StyledUlMovies>
  );
};

export default MoviesList;
