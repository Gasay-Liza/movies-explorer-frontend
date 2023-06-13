import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import MoviesCard from "../MoviesCard/MoviesCard";

import "./App.css";


function App() {
  return (
    <div className="page">
      <div className="page__content">
        {/* <Main/> */}

        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/ffff" element={<Main />} />
        </Routes>

        <Routes>
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
