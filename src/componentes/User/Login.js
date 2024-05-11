import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Estilos/Loggin.css";
import { jwtDecode } from "jwt-decode";



const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-app-8ljh.onrender.com/api/Cuentas/auth/login", {
        userName: username,
        password: password,
      });

      if (response.data.access && response.data.refresh) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        // Verificar si el ID de la cuenta coincide con el ID de administrador
        const decodedToken = jwtDecode(response.data.access);
      const usuarioId = decodedToken.usuario_id;
      // console.log(usuarioId)


        const idAdmin = "663c3767d629eb962c78f07d";
        if (usuarioId === idAdmin) {
          
          navigate("/vista-admin");
        } else {
          navigate("/vista-principal");
        }
      } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  const handleCreateAccount = () => {
    navigate("/crear-cuenta");
  };

  return (
    <div className="login-container">
      <h1>TecFlix</h1>

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
      <button className="create-account-button" onClick={handleCreateAccount}>
        Crear Cuenta
      </button>
    </div>
    
  );
  
};


export default LoginForm; 

