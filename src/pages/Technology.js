// src/pages/Technology.js
import React from 'react';
import backgroundDesktop from '../images/technology/background-technology-desktop.jpg';
import backgroundTablet from '../images/technology/background-technology-tablet.jpg';
import backgroundMobile from '../images/technology/background-technology-mobile.jpg';
import imageLaunchVehicleLandscape from '../images/technology/image-launch-vehicle-landscape.jpg';
import imageLaunchVehiclePortrait from '../images/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceCapsuleLandscape from '../images/technology/image-space-capsule-landscape.jpg';
import imageSpaceCapsulePortrait from '../images/technology/image-space-capsule-portrait.jpg';
import imageSpaceportLandscape from '../images/technology/image-spaceport-landscape.jpg';
import imageSpaceportPortrait from '../images/technology/image-spaceport-portrait.jpg';
import './Technology.css';

const Technology = () => {
  return (
    <div className="technology">
      <div className="background-image" />
      <h1>Explore Space Technology</h1>
      <div className="technology-images">
        <div className="landscape">
          <img src={imageLaunchVehicleLandscape} alt="Launch Vehicle Landscape" />
          <img src={imageSpaceCapsuleLandscape} alt="Space Capsule Landscape" />
          <img src={imageSpaceportLandscape} alt="Spaceport Landscape" />
        </div>
        <div className="portrait">
          <img src={imageLaunchVehiclePortrait} alt="Launch Vehicle Portrait" />
          <img src={imageSpaceCapsulePortrait} alt="Space Capsule Portrait" />
          <img src={imageSpaceportPortrait} alt="Spaceport Portrait" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
