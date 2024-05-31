import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }
  return (
    <header className='header'>
      <div className='logo'>
        <h1>Michipichi</h1>
      </div>
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Adopta</Link>
          </li>
          <li>
            <Link to='/nosotros'>Nosotros</Link>
          </li>
          <li>
            <Link to='/nuestra-familia'>Nuestra Familia</Link>
          </li>
        </ul>
      </nav>
      <div className='nav-responsive'>
  <button onClick={toggleNav} className='nav-responsive-button'>
    {showNav ? '✕' : '☰'}
  </button>
  {showNav && (
    <div className='nav-responsive-menu'>
      <ul>
        <li>
          <Link to='/'>Adopta</Link>
        </li>
        <li>
          <Link to='/nosotros'>Nosotros</Link>
        </li>
        <li>
          <Link to='/nuestra-familia'>Nuestra Familia</Link>
        </li>
      </ul>
    </div>
  )}
</div>

      <div className='redes'>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-whatsapp"></i></a>
      </div>
    </header>
  )
}
