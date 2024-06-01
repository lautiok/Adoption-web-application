import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavResponsive = () => {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
      setShowNav(!showNav);
    };

    // Close the menu when the location changes
    useEffect(() => {
        setShowNav(false);
    }, [location]);

    return (
      <div className="nav-container-responsive">
        <button className="toggle-btn" onClick={toggleNav}> ☰ </button>
        <div className={`nav-r ${showNav ? 'show' : ''}`}>
          <button className="close-btn" onClick={toggleNav}>X</button>
          <nav className='nav-responsive'>
            <ul className='nav-ul'>
              <li><Link to="/">Adopta</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/nuestra-familia">Nuestra Familia</Link></li>
            </ul>
          </nav>
          <div className='redes-responsive'>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
    );
};
