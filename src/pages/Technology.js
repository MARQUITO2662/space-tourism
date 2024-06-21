import React, { useState } from 'react';
import './Technology.css';
import backgroundDesktop from '../images/technology/background-technology-desktop.jpg';
import backgroundTablet from '../images/technology/background-technology-tablet.jpg';
import backgroundMobile from '../images/technology/background-technology-mobile.jpg';
import imageLaunchVehicleLandscape from '../images/technology/image-launch-vehicle-landscape.jpg';
import imageSpaceCapsuleLandscape from '../images/technology/image-space-capsule-landscape.jpg';
import imageSpaceportLandscape from '../images/technology/image-spaceport-landscape.jpg';
import imageLaunchVehiclePortrait from '../images/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceCapsulePortrait from '../images/technology/image-space-capsule-portrait.jpg';
import imageSpaceportPortrait from '../images/technology/image-spaceport-portrait.jpg';

const Technology = () => {
  const [activeStory, setActiveStory] = useState(1);

  const stories = [
    {
      id: 1,
      title: 'Launch Vehicle',
      description:
        'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
      landscapeImage: imageLaunchVehicleLandscape,
      portraitImage: imageLaunchVehiclePortrait,
    },
    {
      id: 2,
      title: 'Space Capsule',
      description:
        'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. It provides safe passage and return for astronauts. Our latest capsule design ensures the highest levels of safety and comfort for our crew.',
      landscapeImage: imageSpaceCapsuleLandscape,
      portraitImage: imageSpaceCapsulePortrait,
    },
    {
      id: 3,
      title: 'Spaceport',
      description:
        'A spaceport or cosmodrome is a site for launching spacecraft, satellites, or missiles. It typically includes launch pads, propellant storage tanks, and assembly buildings. Our state-of-the-art spaceport is equipped to handle multiple launches simultaneously, ensuring efficient operations.',
      landscapeImage: imageSpaceportLandscape,
      portraitImage: imageSpaceportPortrait,
    },
  ];

  const handleStoryClick = (storyId) => {
    setActiveStory(storyId);
  };

  const background = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      return backgroundTablet;
    } else if (window.innerWidth <= 767) {
      return backgroundMobile;
    }
    return backgroundDesktop;
  };

  return (
    <div className="technology" style={{ backgroundImage: `url(${background()})` }}>
      <div className="technology-content">
        <h1 className="text-white text-center text-4xl md:text-6xl mt-20 mb-10">Explore Space Technology</h1>
        <div className="technology-images">
          <section className="w-full md:w-1/2 flex flex-col items-center">
            <h2 className="text-gray-500 mb-4">03 SPACE LAUNCH 101</h2>
            <div className="mb-8">
              <h3 className="text-gray-400 mb-2">THE TERMINOLOGY...</h3>
              <h1 className="text-4xl mb-4 text-white">{stories[activeStory - 1].title}</h1>
              <p className="text-gray-400">{stories[activeStory - 1].description}</p>
            </div>
            <div className="flex flex-col space-y-4 absolute top-4 left-4">
              {stories.map((story) => (
                <button
                  key={story.id}
                  className={`w-12 h-12 rounded-full ${activeStory === story.id ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}
                  onClick={() => handleStoryClick(story.id)}
                >
                  {story.id}
                </button>
              ))}
            </div>
          </section>
          <section className="hidden md:block md:w-1/2">
            <img
              src={window.innerWidth >= 768 ? stories[activeStory - 1].landscapeImage : stories[activeStory - 1].portraitImage}
              alt={stories[activeStory - 1].title}
              className="w-full h-full object-cover"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Technology;
