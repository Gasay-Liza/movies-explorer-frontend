import React, { useCallback, useState} from "react";
import { Route, Routes, useLocation, useNavigate  } from "react-router-dom";

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
// import SavedMovies from "../SavedMoves/SavedMoves";

import mainApi from "../../utils/mainApi";
import moviesApi from "../../utils/moviesApi";

function App() {
  const navigate = useNavigate();

  const currentLocation = useLocation().pathname;

  const headerActive = checkPath(headerPaths, currentLocation);
  const footerActive = checkPath(footerPaths, currentLocation);
  
  const [isLoading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [textServerError, setTextServerError] = React.useState("");
  
  
  const [savedMoves, setSavedMovies] = React.useState([]);


  // Регистрация
async function handleRegister({name, email, password}) {
    setLoading(true);
    try {
      const data = await mainApi.register({name, email, password});
      if (data) {
        handleLogin({email, password});
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      setTextServerError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Авторизация
async function handleLogin({email, password}) {
    setLoading(true);
    try {
      const data = await mainApi.authorize({email, password});
      if (data.message) {
        setLoggedIn(true);
        localStorage.setItem("authorized", "true");
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      setTextServerError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


async function handleSaveMovieCard(movie) {
    setLoading(true);
    try {
      const newCard = await mainApi.createCard({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,});
      if (newCard) {
        setSavedMovies([newCard, ...savedMoves]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  // const cbTokenCheck = useCallback(async () => {
  //   try {
  //     const authorized = localStorage.getItem("authorized");
  //     await mainApi.checkToken(authorized);
  //     setLoggedIn(true);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // const cbLogOut = useCallback(async () => {
  //   try {
  //     await mainApi.signout();
  //     setLoggedIn(false);
  //     localStorage.removeItem("authorized");
  //     navigate("/sign-in", { replace: true });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // //При загрузке страницы получаем данные токена юзера
  // React.useEffect(() => {
  //   cbTokenCheck();
  // }, []);

  // //При загрузке страницы и успешной авторизации получаем данные профиля
  // React.useEffect(() => {
  //   if (!loggedIn) return;
  //   mainApi
  //     .getUserInfo()
  //     .then((data) => {
  //       setCurrentUser(data);
  //       setEmail(data.email);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [loggedIn]);

  return (
    <div className="page">
      <div className="page__content">
        {headerActive && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/saved-movies" element={<SavedMovies />} /> */}
          <Route path="/signup" element={<Register onRegister={handleRegister} isLoading={isLoading} textServerError={textServerError} setTextServerError={setTextServerError}/>} />
          <Route
            path="/signin"
            element={<Login onLogin={handleLogin} isLoggedIn={loggedIn} isLoading={isLoading} textServerError={textServerError} setTextServerError={setTextServerError}/>}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {footerActive && <Footer />}
      </div>
    </div>
  );
}

export default App;
