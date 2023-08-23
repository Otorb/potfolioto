// import './App.css';
import styled from "styled-components";

import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Project/Projects";
import Skil from "./Components/Skill/Skil";
import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
function App() {
  return (
    <Container>
      <NavBar />
      <Home />
      <About />
      <Skil />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
