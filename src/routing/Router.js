import React from "react";
import Nav from "../components/navigations/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavMovies from "../pages/FavMovies/";
import Movies from "../pages/Movies";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/FavMovies" component={FavMovies} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
