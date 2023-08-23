import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import img1 from "../../assets/pequenos.PNG";
import img2 from "../../assets/aguila.PNG";
import img3 from "../../assets/coro.PNG";
import img4 from "../../assets/glendys.PNG";
import img5 from "../../assets/mireya.PNG";
import img6 from "../../assets/cantorey.PNG";
import img7 from "../../assets/pokemon.PNG";


let data = [
  {
    title: "Canto Rey",
    img: img6,
    link:"https://cantorey.vercel.app",
    disc: "SPA para colegio donde los alumnos podrán subir sus trabajos y los profesores podrán descargarlos y revisarlos.",
  },
  {
    title: "Pequeños Gigantes",
    img: img1,
    link:"https://www.centropequenosgigantes.com",
    disc: "Centro de terapias “Pequeños gigantes” donde se creó un sistema de reserva de citas una pasarela de pagos y un acceso para usuarios, profesionales y administradores.",
  },
  {
    title: "Grupo Águila",
    link:"https://grupoaguila1.vercel.app",
    img: img2,
    disc: "“Grupo Águila” empresa dedicada a las pericias de vehículos don de se creó un sistema para que el usuario pueda saber el estado de sus casos sin necesidad de llamar y donde cada perito colocara la información al instante.",
  },
  {
    title: "Voces del Alba",
    link:"https://vocesdelalba.vercel.app",
    img: img3,
    disc: "Coro “Voces del Alba” un lugar donde cada integrante podrá escuchar los temas que les toca aprender por voces. ",
  },
  {
    title: "Glendys Bolivar",
    link:"https://glendysbolivar.vercel.app/",
    img: img4,
    disc: "Portafolio de fotografías usando firebase, donde la usuaria podrá subir o eliminar las fotos de su propio portafolio.",
  },
  {
    title: "Mireya Pedroza",
    link:"https://profemireyita.vercel.app",
    img: img5, 
    disc: "Portafolio de profesora de matemáticas quien ofrece clases virtuales y presenciales.",
  },
  {
    title: "Pokemon",
    link:"https://ottomon-iota.vercel.app/",
    img: img7, 
    disc: "Api de Pokémon donde se podrán ver los pokemones existentes y podrás crear tu Pokémon.",
  },
];
console.log(data.img, "imagen");
var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

function SliderSpace() {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
}

export default SliderSpace;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-color: rgba(43, 66, 215);
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
