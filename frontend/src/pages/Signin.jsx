import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/v1/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        // Si el inicio de sesión es exitoso, puedes realizar acciones como redirigir a otra página
        console.log('Inicio de sesión exitoso:', data.msg);
      } else {
        // Si el inicio de sesión falla, muestra un mensaje de error
        console.error('Error en el inicio de sesión:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
      <div>¿No tienes una cuenta?</div>
      <Link to="/signup">
        <button>Registrarse</button>
      </Link>
    </div>
  );
};

export default Signin;
