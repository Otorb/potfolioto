import React from "react";
import "./PiePg.css";
import fondo from '../../assets/fondo.png'

function PiePg() {
  return (
    <div className="ImageTopFooter">
    <img src={fondo} alt="No hay conexión a internet " />
  </div>
  );
}

export default PiePg;
