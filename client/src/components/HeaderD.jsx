import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AutchContext'
export const HeaderD = () => {
  const { logout } = useAuth()
  return (
    <div className="buttons-container">
        <Link to="/dashboard"><button className="card-create">Inicio</button></Link>
        <Link to="/vermascotas"><button className="card-create">Ver mascotas</button></Link>
        <Link to="/addpets"><button className="card-create">Agregar mascota</button></Link>
        <Link to="/familyadopted"><button className="card-create">Ver familia</button></Link>
        <Link to="/addfamily"><button className="card-create">Añadir familias</button></Link>
        <button className='card-create' onClick={logout}>Cerrar sesión</button>
    </div>
  )
}
