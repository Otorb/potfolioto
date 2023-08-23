import React from "react";
import "./Perfil.css";
import Text from "./Text";

function Perfil() {
  return (
    <div className="perfil-container">
      <div className="perfil-parent">
        <div className="perfil-details">
          <div className="perfil-details-name">
            <span className="primary-text">
              {" "}
              Hola, Soy
              <span > Otoniel Reyes</span>
            </span>
          </div>
          <div className="perfil-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Text />
              </h1>
              <span className="perfil-role-tagline">
                Apasionado por la programación.
              </span>
            </span>
          </div>
          <div className="colz">
            <div className="colz-icon">
              <a href="http://github.com/otorb" Target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/otoniel-reyes-blanco-fullstack" Target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="perfil-picture">
          <div className="perfil-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
