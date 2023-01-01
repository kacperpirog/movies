import React from "react";
import MoviesList from "../../components/MoviesList";
import Paginations from "../../components/Paginations";

const Movies = () => {
  return (
    <div>
      <Paginations />
      <MoviesList />
    </div>
  );
};

export default Movies;
