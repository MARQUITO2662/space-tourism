import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundDesktop from '../images/home/background-home-desktop.jpg';
import backgroundTablet from '../images/home/background-home-tablet.jpg';
import backgroundMobile from '../images/home/background-home-mobile.jpg';
import './Home.css';

const Home = () => {
  const [background, setBackground] = useState(backgroundDesktop);
  const [isAlternate, setIsAlternate] = useState(false);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 1024) {
        setBackground(backgroundDesktop);
      } else if (window.innerWidth >= 768) {
        setBackground(backgroundTablet);
      } else {
        setBackground(backgroundMobile);
      }
    };

    window.addEventListener('resize', updateBackground);
    updateBackground();

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  const handleExploreClick = () => {
    setIsAlternate(!isAlternate);
  };

  return (
    <main className="home" style={{ 
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <section className="home-content">
        <div className="text-content">
          <h1 className={`highlight ${isAlternate ? 'hidden' : ''}`}>
            {isAlternate ? '01' : 'SO, YOU WANT TO TRAVEL TO SPACE'}
          </h1>
          <h2 className={`text-8xl font-bold ${isAlternate ? 'hidden' : ''}`}>
            {isAlternate ? 'WELCOME TO SPACE' : 'SPACE'}
          </h2>
          <h3 className={`text-6xl font-bold ${isAlternate ? '' : 'hidden'}`}>
            EXPLORE THE UNIVERSE
          </h3>
          <p className={`max-w-xl text-lg mt-4 ${isAlternate ? 'hidden' : ''}`}>
            {isAlternate
              ? 'Discover the wonders of the cosmos and embark on an unforgettable journey. The universe is vast and full of mysteries waiting to be explored. Join us on an adventure beyond the stars.'
              : 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'}
          </p>
          <p className={`max-w-xl text-lg mt-4 ${isAlternate ? '' : 'hidden'}`}>
            {isAlternate
              ? 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'
              : 'Discover the wonders of the cosmos and embark on an unforgettable journey. The universe is vast and full of mysteries waiting to be explored. Join us on an adventure beyond the stars.'}
          </p>
        </div>
        <button className="explore-button" onClick={handleExploreClick}>
          EXPLORE
        </button>
      </section>
    </main>
  );
};

export default Home;
