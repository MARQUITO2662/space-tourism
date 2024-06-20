// src/components/SomeComponent.js
import React from 'react';
import iconClose from '../images/shared/icon-close.svg';
import iconHamburger from '../images/shared/icon-hamburger.svg';
import logo from '../images/shared/logo.svg';

const SomeComponent = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <button>
        <img src={iconHamburger} alt="Open menu" />
      </button>
      <button>
        <img src={iconClose} alt="Close menu" />
      </button>
    </div>
  );
};

export default SomeComponent;
