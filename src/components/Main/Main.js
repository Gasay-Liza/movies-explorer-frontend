import React from "react";

import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
// import NavTab from "./NavTab/NavTab";
// import Techs from "./Techs";
// import AboutMe from "./AboutMe";
// import Portfolio from "./Portfolio";

function Main(props) { 
    return (
      <main className="main">
        <Promo />
        <AboutProject />
        {/* <NavTab/>
            
            <Techs/>
            <AboutMe/>
            <Portfolio/> */}
      </main>
    );
}

export default Main;