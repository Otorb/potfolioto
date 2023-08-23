import React from "react";
import "./About.css";
import pict from "../../assets/giphy.gif";

function About() {
  return (
    <div className="AboutBody" id="about">
      <div className="AboutContainer">
        <div className="StyledHeading">
          {" "}
          Sobre{" "}
          <span className="green" style={{ marginLeft: "4px" }}>
            {" "}
            Mí
          </span>
        </div>
        <div className="TextSection">
          ¡Hola! Soy un desarrollador web apasionado con un conjunto de
          habilidades versátiles, especializándome principalmente en desarrollo
          full-stack.
          <br />
          <br />
          Mi pasión radica en crear software que sean funcionales, llevo casi
          dos años dedicándome a la programación me encanta experimentar con
          nuevas tecnologías y mantenerme al día con las últimas tendencias del
          mundo tecnológico.
          <br />
          <br />
          Me encanta la música, manejar bicicleta y compartir en familia,
          actualmente, estoy buscando activamente oportunidades completas de
          desarrollo en front-end como el back-end para seguir creciendo
          profesionalmente.
        </div>
      </div>
      <div className="AboutContainer">
        <img className="Photo" src={pict} />
        <br />
        <br />
        <div className="space">
        <button className="btn-dwl">Descargar Curriculum</button>
        </div>
      </div>
    </div>
  );
}

export default About;
