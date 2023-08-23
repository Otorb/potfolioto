import React from 'react'
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{ 
        strings: [
          "Full-Stack Developer",
          "Paginas Web",
          "y ¡mucho más!...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
       
      }}
    />
  )
}

export default Text