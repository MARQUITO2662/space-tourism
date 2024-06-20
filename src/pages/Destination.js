import React from 'react';
import imageEuropa from '../images/destination/image-europa.png';
import imageMars from '../images/destination/image-mars.png';
import imageMoon from '../images/destination/image-moon.png';
import imageTitan from '../images/destination/image-titan.png';
import './Destination.css';

function Destination() {
  return (
    <div className="destination">
      {/* Contenido del componente Destination */}
      <div className="destination-images">
        <img src={imageEuropa} alt="Europa" />
        <img src={imageMars} alt="Mars" />
        <img src={imageMoon} alt="Moon" />
        <img src={imageTitan} alt="Titan" />
      </div>
    </div>
  );
}

export default Destination;
