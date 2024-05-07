import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importa Axios para realizar solicitudes HTTP
import "../../Estilos/Loggin.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza una solicitud POST para verificar las credenciales en el backend
      const response = await axios.post("https://api-app-8ljh.onrender.com/api/Cuentas/auth", {
        userName: username,
        password: password,
      });

      // Si el usuario está autenticado correctamente, redirige a la página principal
      if (response.data.msg === 'Usuario logueado correctamente') {
        navigate("/vista-principal");
      } else {
        // Si las credenciales son inválidas, muestra un mensaje de error
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Si hay algún error en la solicitud, muestra un mensaje de error genérico
      alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  const handleCreateAccount = () => {
    // Lógica para redirigir a la página de creación de cuenta
    navigate("/crear-cuenta");
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {/* Botón para redirigir a la página de creación de cuenta */}
      <button className="create-account-button" onClick={handleCreateAccount}>
        Crear Cuenta
      </button>
    </div>
  );
};

export default LoginForm;
