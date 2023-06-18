import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
// import MoviesCard from "../MoviesCard/MoviesCard";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        {/* <Main/> */}
        <Header/>
        <Routes>
          <Route path="/hhh" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/hhhv" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/hhh" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/ggg" element={<Main />} />
        </Routes>

        <Routes>
          <Route path="/" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
