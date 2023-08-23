import React from 'react'
import styled from 'styled-components';

import { Zoom } from 'react-awesome-reveal';
import SliderSpace from './SliderSpace';
import Separator from '../Skill/Separator';

function Projects() {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Proyectos <span className="green">Recientes</span></h1>
            <p>Una pequeña muestra de los últimos proyectos que he realizado 
        con las tecnologías antes mencionadas para front-end, back-end y bases de datos.</p>
        </Zoom>
        <Slide>
            <SliderSpace />
        </Slide>
    </Container>
  )
}

export default Projects

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 15px;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``