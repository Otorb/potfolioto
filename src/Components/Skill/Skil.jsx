import React from 'react'
import './Skills.css'
import Separator from './Separator';
import SkillsCard from './SkillsCard';
import react from '../../assets/react.png'
import figma from '../../assets/figma.png'
import node from '../../assets/node.png'
import javascript from '../../assets/js.png'
import html from '../../assets/html.webp'
import css from '../../assets/css.png'
import github from '../../assets/github.png'
import git from '../../assets/git.webp'
import vite from '../../assets/vite.png'
import izipay from '../../assets/izipay.webp'
import stripe from '../../assets/stripe.webp'

import express from '../../assets/express.png'
import firebase from '../../assets/firebase.png'
import mysql from '../../assets/mysql.png'
import postgres from '../../assets/postgres.png'
import api from '../../assets/api.png'
import sequelize from '../../assets/sequelize.png'
import postman from '../../assets/postman.png'
import docker from '../../assets/docker.png'
import emailjs from '../../assets/emailjs.png'

const data = [
  {
    type: "Web -",
    type2: "Development",
    list: [
      {
        name: "ReactJS",
        icon:<img src={react} alt="react"/>
        },
      {
        name: "HTML5",
        icon: <img src={html} width="70px" alt="html"/>
        },
        {
          name: "CSS3",
          icon: <img src={css} width="70px" alt="css"/>
          },
      {
        name: "JavaScript",
        icon: <img src={javascript} width="70px" alt="javascript"/>
      },
      {
        name: "Figma",
        icon:<img src={figma} width="70px" alt="figma"/>
      },
      {
        name: "Vite",
        icon:<img src={vite} width="70px" alt="vite"/>
      },
      {
        name: "Github",
        icon:<img src={github} width="70px" alt="github"/>
      },
      {
        name: "Git",
        icon:<img src={git} width="70px" alt="git"/>
      },
      {
        name: "Emailjs",
        icon:<img src={emailjs} width="70px" alt="emailjs"/>
      },
      {
        name: "Izipay",
        icon:<img src={izipay} width="70px" alt="izipay"/>
      }, 
    ],
  },
  {
    type: "Back y",
    type2: "Bases de datos",
    list: [
      {
        name: "Node Js",
        icon: <img src={node} width="70px" alt="node"/>
      },
      {
        name: "Express",
        icon: <img src={express} width="70px" alt="express"/>
      },
      {
        name: "Api-rest",
        icon: <img src={api} width="70px" alt="api"/>
      },
      {
        name: "Postman",
        icon: <img src={postman} width="70px" alt="postman"/>
      },
      {
        name: "Sequelize",
        icon: <img src={sequelize} width="70px" alt="sequelize"/>
      },
      {
        name: "Firebase",
        icon: <img src={firebase} width="70px" alt="firebase"/>
      },
      {
        name: "PostgreSQL",
        icon: <img src={postgres} width="70px" alt="postgres"/>
      },
      {
        name: "MySQL",
        icon: <img src={mysql} width="70px" alt="mysql"/>
      },
      {
        name: "Docker",
        icon: <img src={docker} width="70px" alt="docker"/>
      },
      {
        name: "Stripe",
        icon:<img src={stripe} width="70px" alt="stripe"/>
      },
      
    ],
  },
];

function Skil() {
  return (
    <div className="skills" id="skill">
    <Separator />
  <label className="section-title">Skills</label>
  <div className="skills-container">
    {data.map((item) => {
      return (
        <div className="skills-section">
          <label className="skills-section-title">{item.type} <span className='green' >{item.type2}</span> </label>
          <div className="skills-list">
            {item.list.map((skill) => {
              return <SkillsCard skill={skill} />;
            })}
          </div>
        </div>
      );
    })}
  </div>
</div>
  )
}

export default Skil