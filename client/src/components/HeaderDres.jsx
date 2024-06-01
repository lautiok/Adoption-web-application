import React, { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AutchContext'

const options = [
  { value: '/vermascotas', label: 'Ver mascotas' },
  { value: '/addpets', label: 'Agregar mascota' },
  { value: '/familyadopted', label: 'Ver familia' },
  { value: '/addfamily', label: 'Añadir familias' },
  { value: 'logout', label: 'Cerrar sesión' }
]

export const HeaderDres = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleChange = (option) => {
    setSelectedOption(option)
    if (option.value === 'logout') {
      logout()
    } else {
      navigate(option.value)
    }
  }

  return (
    <div className="buttons-container-mobile-res">
      <Select
        placeholder={'Selecciona una opción'}
        options={options}
        className="select"
        value={selectedOption}
        onChange={handleChange}
      />
    </div>
  )
}
