import React from "react";
// import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import MoviesCard from "../MoviesCard/MoviesCard";

import "./App.css";


function App() {
  return (
    <div className="page">
      <div className="page__content">
        {/* <Main/> */}
        <Movies />
      </div>
    </div>
  );
}

export default App;
