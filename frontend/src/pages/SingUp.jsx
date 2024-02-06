import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SingUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('Error en la solicitud')
        }
      })
      .then((data) => {
        console.log('Inicio de sesión exitoso:', data.msg)
      })
      .catch((error) => {
        console.error('Error en el inicio de sesión:', error.message)
      })
  }

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>

      <div>Already have an account?</div>
      <Link to="/signin">
        <button>SignIn</button>
      </Link>
    </div>
  )
}

export default SingUp
