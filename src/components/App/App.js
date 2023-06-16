import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
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
          <Route path="/hhh" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/hhh" element={<Register />} />
        </Routes>

        <Routes>
          <Route path="/ggg" element={<Main />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
