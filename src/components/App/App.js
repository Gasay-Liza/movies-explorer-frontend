import React from "react";
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


function App() {
  
  const currentLocation = useLocation().pathname;
  
  const headerActive = checkPath(headerPaths, currentLocation);
  const footerActive = checkPath(footerPaths, currentLocation);

  return (
    <div className="page">
      <div className="page__content">
        {/* <Main/> */}
        {headerActive && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        {/* <Routes>
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
        </Routes> */}
        {footerActive && <Footer />}
      </div>
    </div>
  );
}

export default App;
