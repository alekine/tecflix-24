import React, { useState, useEffect } from "react";
import axios from "../../server/Axios";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "../../Estilos/InicioPeliculas.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api-app-8ljh.onrender.com/api/movies/obtenerMovie");
        setMovies(response.data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filtrar películas según el texto de búsqueda
  const filteredMovies = movies.filter((movie) =>
    movie.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Listado de Películas</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="movie-container">
        {filteredMovies.map((movie, index) => (
          <Link to={`/movie-resena/${movie._id}`} key={index} className="movie-card">
            {/* Envolvemos la imagen dentro de un componente Link */}
            <img src={movie.imagen} alt={movie.titulo} />
            <h2>{movie.titulo}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
