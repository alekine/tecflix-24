// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redireccionar
// import '../Estilos/ResenaForm.css'; // Archivo de estilos para el componente

// function ResenaForm() {
//   const [resena, setResena] = useState('');
//   const [nombre, setNombre] = useState('');
//   const [puntuacion, setPuntuacion] = useState('');
//   const navigate = useNavigate(); // Instancia de useNavigate

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí puedes hacer algo con los datos de la reseña
//     console.log('Nombre:', nombre);
//     console.log('Puntuación:', puntuacion);
//     console.log('Reseña:', resena);
//   };

//   // Función para manejar el clic en la imagen y redireccionar a ResenaForm
//   const handleImageClick = () => {
//     navigate('/resenaForm'); // Redirecciona a /resenaForm
//   };

//   return (
//     <div className="resena-form">
//       <h1 className="title">Tecflix</h1>
//       <button className="inicio-button" onClick={() => navigate('/')}>Inicio</button>
//       <div className="pelicula-image" onClick={handleImageClick}>Imagen de la película</div>
//       <div className="sinopsis">Sinopsis de la película</div>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="input-group">
//           <label>Nombre:</label>
//           <input
//             type="text"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label>Puntuación:</label>
//           <input
//             type="number"
//             min="0"
//             max="10"
//             value={puntuacion}
//             onChange={(e) => setPuntuacion(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label>Reseña:</label>
//           <textarea
//             value={resena}
//             onChange={(e) => setResena(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">Enviar Reseña</button>
//       </form>
//     </div>
//   );
// }

// export default ResenaForm;

import React, { useState, useEffect } from 'react'; // Importa useEffect desde React
import { useLocation } from 'react-router-dom';
import imagesData from '../imagenes/Imagenes'; // Importa el array de imágenes
import '../Estilos/ResenaForm.css'; // Estilos personalizados para el componente

function ResenaForm() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null); // Estado para la imagen seleccionada
  const [resena, setResena] = useState(''); // Define resena y setResena utilizando useState
  const location = useLocation(); // Obtén la ubicación actual de la ruta

  // Extrae el parámetro de la imagen seleccionada de la URL cuando la ubicación cambia
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const imagen = params.get('imagen');
    if (imagen) {
      setImagenSeleccionada(imagen);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reseña:', resena); // Imprime la reseña en la consola
    // Aquí puedes enviar la reseña a algún servicio o realizar alguna acción adicional
  };

  return (
    <div className="resena-form">
      <h1 className="title">Tecflix</h1>
      <div className="pelicula-image">
        {imagenSeleccionada && <img src={imagenSeleccionada} alt="Imagen de la película" />}
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Reseña:</label>
          <textarea
            value={resena}
            onChange={(e) => setResena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar Reseña</button>
      </form>
    </div>
  );
}

export default ResenaForm;
