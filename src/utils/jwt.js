
import { jwtDecode } from "jwt-decode";


const obtenerIdUsuario = () => {
    // Obtener el token de acceso del almacenamiento local
    const accessToken = localStorage.getItem("accessToken");
  
    // Si no hay token de acceso, retornar null
    if (!accessToken) {
      return null;
    }
  
    try {
      // Decodificar el token para obtener el ID de usuario
      const decodedToken = jwtDecode(accessToken);
      const usuarioId = decodedToken.usuario_id;
  
      return usuarioId;
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      return null;
    }
  };
  
  export default obtenerIdUsuario;