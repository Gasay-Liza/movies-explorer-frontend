import React, { useState } from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <section className="movies">
        <SearchForm/>
    </section>
  );
}

export default Movies;
