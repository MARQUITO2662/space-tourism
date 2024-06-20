import React, { useState, useEffect } from 'react';
import backgroundDesktop from '../images/home/background-home-desktop.jpg';
import backgroundTablet from '../images/home/background-home-tablet.jpg';
import backgroundMobile from '../images/home/background-home-mobile.jpg';
import './Home.css';

const Home = () => {
  const [background, setBackground] = useState(backgroundDesktop);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 1024) {
        setBackground(backgroundDesktop);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setBackground(backgroundTablet);
      } else {
        setBackground(backgroundMobile);
      }
    };

    window.addEventListener('resize', updateBackground);
    updateBackground(); // Inicializa el background

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <div className="home" style={{ 
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Contenido del componente Home */}
    </div>
  );
};

export default Home;
