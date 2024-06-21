import React, { useState } from 'react';
import backgroundDesktop from '../images/crew/background-crew-desktop.jpg';
import backgroundTablet from '../images/crew/background-crew-tablet.jpg';
import backgroundMobile from '../images/crew/background-crew-mobile.jpg';
import astronaut1 from '../images/crew/image-anousheh-ansari.png';
import astronaut2 from '../images/crew/image-douglas-hurley.png';
import astronaut3 from '../images/crew/image-mark-shuttleworth.png';
import astronaut4 from '../images/crew/image-victor-glover.png';
import './Crew.css';

const astronauts = [
  {
    name: "ANOUSHEH ANSARI",
    role: "FLIGHT ENGINEER",
    description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: astronaut1,
  },
  {
    name: "DOUGLAS HURLEY",
    role: "COMMANDER",
    description: "Douglas Gerald Hurley is an American engineer, retired Marine Corps officer, former NASA astronaut and spacecraft commander. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: astronaut2,
  },
  {
    name: "MARK SHUTTLEWORTH",
    role: "MISSION SPECIALIST",
    description: "Mark Richard Shuttleworth is a South African entrepreneur who is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system. He became the first South African in space as a space tourist.",
    image: astronaut3,
  },
  {
    name: "VICTOR GLOVER",
    role: "PILOT",
    description: "Victor Jerome Glover is a NASA astronaut of the class of 2013 and Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy.",
    image: astronaut4,
  },
];

const Crew = () => {
  const [selectedAstronaut, setSelectedAstronaut] = useState(3);

  const { name, role, description, image } = astronauts[selectedAstronaut];

  return (
    <main className="crew">
      <div className="background-image" />
      <section className="crew-content">
        <h1 className="text-lg font-light mb-8">
          <span className="highlight">02</span> MEET YOUR CREW
        </h1>
        <div className="astronaut-info">
          <div className="text-content">
            <h2 className="text-4xl font-medium opacity-50">{role}</h2>
            <h3 className="text-6xl font-bold">{name}</h3>
            <p className="max-w-xl text-lg mt-4 opacity-50">
              {description}
            </p>
            <div className="buttons">
              {astronauts.map((_, index) => (
                <button
                  key={index}
                  className={`circle-button ${selectedAstronaut === index ? 'active' : ''}`}
                  onClick={() => setSelectedAstronaut(index)}
                />
              ))}
            </div>
          </div>
          <div className="image-content">
            <img src={image} alt={name} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Crew;
