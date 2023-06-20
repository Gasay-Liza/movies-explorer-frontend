import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
// import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { headerPaths, footerPaths } from "../../utils/constans";
import { checkPath } from "../../utils/utils";
import "./App.css";
import SavedMovies from "../SavedMoves/SavedMoves";
import moviesApi from "../../utils/MoviesApi";
function App() {
  
  const currentLocation = useLocation().pathname;
  
  const headerActive = checkPath(headerPaths, currentLocation);
  const footerActive = checkPath(footerPaths, currentLocation);
  const [moviesCards, setMoviesCards] = React.useState([]);
  React.useEffect(() => {
    moviesApi
      .getInitialMoviesCards()
      .then((cards) => {
        setMoviesCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        {headerActive && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<Movies moviesCards={moviesCards} />}
          />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {footerActive && <Footer />}
      </div>
    </div>
  );
}

export default App;
