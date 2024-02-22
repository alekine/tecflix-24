// import React, { useState } from 'react';
// import '../Estilos/InicioPeliculas.css'; // Archivo de estilos para la aplicación
// import imagesData from '../imagenes/Imagenes.js'; // Importa el archivo de datos de imágenes




// function InicioPeliculas() {
//   const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

//   return (
//     <div className="app" style={{ backgroundColor: '#030918', color: 'white' }}>
//       <h1 style={{ color: 'red' }}>TecFlix</h1>
//       <input
//         type="text"
//         placeholder="Buscar en películas"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ color: 'black', backgroundColor: 'white' }}
//       />
//       <div className="movies-container">
       
//         {/* Mapea sobre el array de datos de imágenes y renderiza cada una */}
//         {imagesData.map((movie, index) => (
//           <div key={index} className="movie">
//             <img src={movie.image} alt={movie.title} />
//             <h2 style={{ color: 'white' }}>{movie.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default InicioPeliculas;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/InicioPeliculas.css';
import imagesData from '../imagenes/Imagenes.js';

function InicioPeliculas() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app" style={{ backgroundColor: '#030918', color: 'white' }}>
      <h1 style={{ color: 'red' }}>TecFlix</h1>
      <input
        type="text"
        placeholder="Buscar en películas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ color: 'black', backgroundColor: 'white' }}
      />
      <div className="movies-container">
        {imagesData.map((movie, index) => (
          <Link to="/resenaForm" key={index} className="movie-link">
            <div className="movie">
              <img src={movie.image} alt={movie.title} />
              <h2 style={{ color: 'white' }}>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InicioPeliculas;

