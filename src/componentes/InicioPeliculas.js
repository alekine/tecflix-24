


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
        style={{ color: 'black', backgroundColor: 'white' }}//caja busqueda
      />

      
      <div className="movies-container">
        {imagesData.map((movie, index) => (
          <Link to={`/resena?imagen=${encodeURIComponent(movie.image)}`} key={index} className="movie-link">
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
