import axios from "axios";
import React, { useState, useEffect } from "react";
import AppContext from "./Context";
import Router from "./routing/Router";
import { baseImgUrl } from "./helpers/movieBaseImgUrl";
import { getfavMoviesFromLocalStorage } from "./utils/localStorageGetters";
import GlobalStyles from "./globalStyles/GlobalStyles";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [favMovies, setFavMovie] = useState([]);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const localStorageFavMovies = getfavMoviesFromLocalStorage();
    setFavMovie(localStorageFavMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=158ec5cdd4a7ba8bc8b88f2649e92dc5&page=${page}`
      )
      .then((res) => {
        const movies = res.data.results;
        const lastPage = res.data.total_pages;
        console.log(res.data, "RES");
        setMovies(movies);
        setLastPage(lastPage);
      })
      .catch((error) => console.log(error));
  };

  const goNextPage = () => {
    setPage(page + 1);
  };
  const goBackPage = () => {
    setPage(page - 1);
  };

  const addToFavMovies = (movieId) => {
    const selectMovies = movies.find((movies) => movies.id === movieId);

    setFavMovie([...new Set([...favMovies, selectMovies])]);
  };

  const deleteFavMovies = (id) => {
    const filteredMovies = favMovies.filter((movie) => movie.id !== id);
    setFavMovie([...filteredMovies]);
  };

  return (
    <div>
      <GlobalStyles />
      <AppContext.Provider
        value={{
          movies,
          page,
          lastPage,
          favMovies,
          baseImgUrl: baseImgUrl,
          goNextPage: goNextPage,
          goBackPage: goBackPage,
          addToFavMovies: addToFavMovies,
          deleteFavMovies: deleteFavMovies,
        }}
      >
        <Router />
      </AppContext.Provider>
    </div>
  );
};

export default App;
