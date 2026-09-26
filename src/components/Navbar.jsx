
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav>
      <div className="logo">
        Raa<span>ही</span>
    </div>

      <div className="nav-links">
        <a
          href="#home"
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => setActiveLink('home')}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeLink === 'about' ? 'active' : ''}
          onClick={() => setActiveLink('about')}
        >
          About
        </a>

        <a
          href="#packages"
          className={activeLink === 'packages' ? 'active' : ''}
          onClick={() => setActiveLink('packages')}
        >
          Packages
        </a>

        <a
          href="#contact"
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => setActiveLink('contact')}
        >
          Contact
        </a>
      </div>

     <button onClick={() => window.location.href = "#contact"}>
  Explore Now
</button>
    </nav>
  );
}

export default Navbar;

