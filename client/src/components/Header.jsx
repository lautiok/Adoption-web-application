import React  from 'react'
import { Link } from 'react-router-dom'
import { NavResponsive } from './NavResponsive'

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
       <Link to='/'><h1>Michipichi</h1></Link>
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
      <NavResponsive />
      <div className='redes'>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-whatsapp"></i></a>
      </div>
    </header>
  )
}
