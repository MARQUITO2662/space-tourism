import React, { useState } from 'react';
import './Destination.css';
import backgroundDesktop from '../images/destination/background-destination-desktop.jpg';
import backgroundTablet from '../images/destination/background-destination-tablet.jpg';
import backgroundMobile from '../images/destination/background-destination-mobile.jpg';
import imageEuropa from '../images/destination/image-europa.png';
import imageMars from '../images/destination/image-mars.png';
import imageMoon from '../images/destination/image-moon.png';
import imageTitan from '../images/destination/image-titan.png';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState('Mars');

  const background = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      return backgroundTablet;
    } else if (window.innerWidth <= 767) {
      return backgroundMobile;
    }
    return backgroundDesktop;
  };

  const destinationContent = {
    Mars: {
      title: 'MARS',
      description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. KM',
      travelTime: '9 MONTHS',
      image: imageMars
    },
    Europa: {
      title: 'EUROPA',
      description: 'Explore the icy surface of Europa, one of Jupiter\'s largest moons. Beneath its frozen crust lies a global ocean of salty liquid water, making it a fascinating destination for exploration.',
      distance: '390 MIL. KM',
      travelTime: '7 YEARS',
      image: imageEuropa
    },
    Titan: {
      title: 'TITAN',
      description: 'Venture to Titan, Saturn\'s largest moon, where you can experience a unique landscape of lakes and rivers filled with liquid methane and ethane. It\'s like nowhere else in the solar system!',
      distance: '1.2 BILLION KM',
      travelTime: '7 YEARS',
      image: imageTitan
    },
    Moon: {
      title: 'MOON',
      description: 'The Moon, Earth\'s natural satellite, offers a stunning view of our home planet from space. Walk in the footsteps of astronauts and explore the history of lunar exploration.',
      distance: '384,400 KM',
      travelTime: '3 DAYS',
      image: imageMoon
    }
  };

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="destination" style={{ backgroundImage: `url(${background()})` }}>
      <div className="destination-content">
        <div className="destination-left">
          <h1 className="text-lg font-light pb-10">
            <span className="text-gray-500">01</span> <span className="text-white">PICK YOUR DESTINATION</span>
          </h1>
          <img src={destinationContent[selectedDestination].image} alt={selectedDestination} className="w-80 h-80" />
        </div>
        <div className="destination-right">
          <div className="destination-buttons">
            <button
              className={`text-white ${selectedDestination === 'Mars' ? 'active' : ''}`}
              onClick={() => handleDestinationClick('Mars')}
            >
              Mars
            </button>
            <button
              className={`text-white ${selectedDestination === 'Europa' ? 'active' : ''}`}
              onClick={() => handleDestinationClick('Europa')}
            >
              Europa
            </button>
            <button
              className={`text-white ${selectedDestination === 'Titan' ? 'active' : ''}`}
              onClick={() => handleDestinationClick('Titan')}
            >
              Titan
            </button>
            <button
              className={`text-white ${selectedDestination === 'Moon' ? 'active' : ''}`}
              onClick={() => handleDestinationClick('Moon')}
            >
              Moon
            </button>
          </div>
          <div className="destination-info text-white">
            <h2 className="text-6xl font-bold">{destinationContent[selectedDestination].title}</h2>
            <p className="max-w-xl mx-auto text-lg mt-8 mb-8">
              {destinationContent[selectedDestination].description}
            </p>
            <div className="flex justify-center space-x-20">
              <div className="text-center">
                <h3 className="text-sm font-light">AVG. DISTANCE</h3>
                <p className="text-2xl font-bold">{destinationContent[selectedDestination].distance}</p>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-light">EST. TRAVEL TIME</h3>
                <p className="text-2xl font-bold">{destinationContent[selectedDestination].travelTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
