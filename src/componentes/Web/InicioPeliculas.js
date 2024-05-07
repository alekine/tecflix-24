import React, { useState, useEffect } from "react";
import axios from "../../server/Axios";
import { Link } from "react-router-dom";
import "../../Estilos/InicioPeliculas.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api-app-8ljh.onrender.com/api/movies/obtener");
        setMovies(response.data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Listado de Películas</h1>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.imagen} alt={movie.titulo} />
            <h2>{movie.titulo}</h2>
          </div>
        ))}
      </div>
      <Link to="/agregar-pelicula">
      
      </Link>
    </div>
  );
};

export default MovieList;
