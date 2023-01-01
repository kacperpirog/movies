// import axios from "axios";
// import React, { Component } from "react";
// import AppContext from "./Context";
// import Router from "./routing/Router";
// import { baseImgUrl } from "./helpers/movieBaseImgUrl";
// // import Test from "./cw-styled-components/Test";
// import { getfavMoviesFromLocalStorage } from "./utils/localStorageGetters";

// class App extends Component {
//   state = {
//     movies: [],
//     page: 1,
//     lastPage: null,
//     favMovies: [],
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.getMovies();
//     }
//     if (prevState.favMovies !== this.state.favMovies) {
//       localStorage.setItem("favMovies", JSON.stringify(this.state.favMovies));
//     }
//   }
//   componentDidMount() {
//     this.getMovies();

//     const localStorageFavmovies = getfavMoviesFromLocalStorage();
//     this.setState({
//       favMovies: localStorageFavmovies,
//     });
//   }

//   getMovies = () => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/top_rated?api_key=158ec5cdd4a7ba8bc8b88f2649e92dc5&page=${this.state.page}`
//       )
//       .then((res) => {
//         console.log(res.data, "RES");
//         this.setState({
//           movies: res.data.results,
//           lastPage: res.data.total_pages,
//         });
//       })
//       .catch((error) => console.log(error));
//   };

//   goNextPage = () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//   };
//   goBackPage = () => {
//     this.setState({
//       page: this.state.page - 1,
//     });
//   };
//   addToFavMovies = (movieId) => {
//     const selectMovies = this.state.movies.find(
//       (movies) => movies.id === movieId
//     );

//     this.setState({
//       favMovies: [...new Set([...this.state.favMovies, selectMovies])],
//     });
//   };

//   deleteFavMovies = (id) => {
//     const filteredMovies = this.state.favMovies.filter(
//       (movie) => movie.id !== id
//     );
//     this.setState({
//       favMovies: [...filteredMovies],
//     });
//   };

//   render() {
//     const { movies, page, lastPage, favMovies } = this.state;
//     return (
//       <div>
//         <AppContext.Provider
//           value={{
//             movies,
//             page,
//             lastPage,
//             favMovies,
//             baseImgUrl: baseImgUrl,
//             goNextPage: this.goNextPage,
//             goBackPage: this.goBackPage,
//             addToFavMovies: this.addToFavMovies,
//             deleteFavMovies: this.deleteFavMovies,
//           }}
//         >
//           <Router />
//         </AppContext.Provider>
//       </div>
//     );
//   }
// }

// export default App;

// //
