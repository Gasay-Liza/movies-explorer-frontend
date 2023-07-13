import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { MOVIES_API_URL } from "../../utils/constans";

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
import SavedMovies from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/mainApi";
import moviesApi from "../../utils/moviesApi";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const currentLocation = useLocation().pathname;
  const [savedMovies, setSavedMovies] = useState([]); // Сохраненные фильмы
  const [isLoading, setIsLoading] = useState(false);
  const headerActive = checkPath(headerPaths, currentLocation);
  const footerActive = checkPath(footerPaths, currentLocation);
  const [loggedIn, setLoggedIn] = useState(false);
  const [textServerError, setTextServerError] = useState("");

  // Регистрация
  async function handleRegister({ name, email, password }) {
    setIsLoading(true);
    try {
      const data = await mainApi.register({ name, email, password });
      if (data.message) {
        handleLogin({ email, password });
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      setTextServerError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  // Авторизация
  async function handleLogin({ email, password }) {
    setIsLoading(true);
    try {
      const data = await mainApi.authorize({ email, password });
      if (data.message) {
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      setTextServerError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  // Обновление профиля
  async function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    try {
      const data = await mainApi.updateUser({ name, email });
      if (data.message) {
        setCurrentUser({ name, email });
      }
    } catch (err) {
      setTextServerError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const cbTokenCheck = useCallback(async () => {
    try {
      const userData = await mainApi.checkToken();
      if (userData) {
        setCurrentUser(userData);
        setLoggedIn(true);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Сохранение карточки
  async function handleSaveMovieCard(movie) {
    try {
      const newMovieCard = await mainApi.createMovieCard({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
      if (newMovieCard) {
        setSavedMovies([newMovieCard, ...savedMovies]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  // Получение сохраненных карточек юзера
  const cbGetSavedCards = useCallback(async () => {
    try {
      const data = await mainApi.getSavedMovies();
      if (data) {
        setSavedMovies(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Удаление карточки
  async function handleDeleteMovieCard(movie) {
    const deletedCard = savedMovies.find((savedMovie) => {
      return savedMovie.movieId === (movie.movieId || movie.id);
    });
    try {
      const data = await mainApi.deleteMovieCard(deletedCard._id);
      if (data) {
        setSavedMovies((prev) => {
          return prev.filter((movie) => movie._id !== deletedCard._id);
          });
      }
    } catch (err) {
      console.error(err);
    }
  }

  const cbLogOut = useCallback(async () => {
    try {
      const data = await mainApi.signout();
      if (data) {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        navigate("/signin", { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  //При загрузке страницы получаем данные токена юзера
  useEffect(() => {
    cbTokenCheck();
  }, []);

  //При загрузке страницы и успешной авторизации получаем сохраненные фильмы юзера
  useEffect(() => {
    if (loggedIn) {
      cbGetSavedCards();
    }
  }, [loggedIn]);

  //При загрузке страницы и успешной авторизации получаем данные профиля
  useEffect(() => {
    if (!loggedIn) return;
    mainApi
      .checkToken()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          {headerActive && <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <Movies
                  savedMovies={savedMovies}
                  onCardSave={handleSaveMovieCard}
                  onCardDelete={handleDeleteMovieCard}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  onCardDelete={handleDeleteMovieCard}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleRegister}
                  isLoading={isLoading}
                  textServerError={textServerError}
                  setTextServerError={setTextServerError}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={handleLogin}
                  isLoggedIn={loggedIn}
                  isLoading={isLoading}
                  textServerError={textServerError}
                  setTextServerError={setTextServerError}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onUpdateUser={handleUpdateUser}
                  onLogOut={cbLogOut}
                  isLoading={isLoading}
                  textServerError={textServerError}
                  setTextServerError={setTextServerError}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {footerActive && <Footer />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
