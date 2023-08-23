import React from "react";
import "./Home.css";
import PiePg from "./PiePg";
import Perfil from "./Perfil";

function Home() {
  return (
    <div className="HomeMainContainer" id="home">
      <div className="home-top" >
        <br/><br/><br/><br/>
      <Perfil />
      <PiePg />
      </div>
    </div>
  );
}

export default Home;
