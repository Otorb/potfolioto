import React from 'react'
import styled from 'styled-components';

function Project(props) {
    const { img, disc, title, link } = props.item
  return (
    <Container className='project'>
    <img src={img} width ="100%" height= "100%" alt="project" />
    <div className="disc">
        <h1>{title}</h1>
        <p>{disc}
        <a href={link} Target="_blank">demo</a>
        </p>
    </div>
</Container>
  )
}

export default Project

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    color:white;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: blue;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

`