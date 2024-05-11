import React, { useState } from "react";
import axios from "../../server/Axios";
import "../../Estilos/crearCuenta.css"




const CreateUserForm = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("La contraseña y la confirmación de contraseña no coinciden.");
        return;
      }

      if (userName.length > 15) {
        alert("El nombre de usuario no puede tener más de 15 caracteres.");
        return;
      }

      if (password.length > 20) {
        alert("La contraseña no puede tener más de 20 caracteres.");
        return;
      }

      // Realizar una solicitud POST para guardar la cuenta de usuario en la base de datos
      await axios.post("https://api-app-8ljh.onrender.com/api/Cuentas/auth/registro", {
        nameFull: fullName,
        userName: userName,
        password: password,
      });

      // Limpiar los campos después de guardar la cuenta
      setFullName("");
      setUserName("");
      setPassword("");
      setConfirmPassword("");

      alert("Cuenta de usuario creada correctamente.");
    } catch (error) {
      console.error("Error al crear la cuenta de usuario:", error);
      alert("Error al crear la cuenta de usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="create-user-container">
      <h2>Crear Cuenta de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre de Usuario (máx. 10 caracteres):</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            maxLength={15}
            required
          />
        </div>
        <div>
          <label>Contraseña (máx. 16 caracteres):</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={20}
            required
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default CreateUserForm;

