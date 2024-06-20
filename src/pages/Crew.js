// src/pages/Crew.js
import React from 'react';
import backgroundDesktop from '../images/crew/background-crew-desktop.jpg';
import backgroundTablet from '../images/crew/background-crew-tablet.jpg';
import backgroundMobile from '../images/crew/background-crew-mobile.jpg';
import astronaut1 from '../images/crew/image-anousheh-ansari.png';
import astronaut2 from '../images/crew/image-douglas-hurley.png';
import astronaut3 from '../images/crew/image-mark-shuttleworth.png';
import astronaut4 from '../images/crew/image-victor-glover.png';
import './Crew.css';

const Crew = () => {
  return (
    <div className="crew">
      <div className="background-image" />
      <h1>Meet the Crew</h1>
      <div className="astronauts">
        <img src={astronaut1} alt="Anousheh Ansari" />
        <img src={astronaut2} alt="Douglas Hurley" />
        <img src={astronaut3} alt="Mark Shuttleworth" />
        <img src={astronaut4} alt="Victor Glover" />
      </div>
    </div>
  );
};

export default Crew;
