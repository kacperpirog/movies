export const getfavMoviesFromLocalStorage = () => {
  let localStoragefavMovies;
  if (localStorage.getItem("favMovies")) {
    localStoragefavMovies = JSON.parse(localStorage.getItem("favMovies"));
  } else {
    localStoragefavMovies = [];
  }

  return localStoragefavMovies;
};
