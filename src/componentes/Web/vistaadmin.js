import React, { useState, useEffect } from "react";
import axios from "../../server/Axios";
import "../../Estilos/vistaadmin.css";
import { Link } from "react-router-dom"; 

const MovieTitlesTable = () => {
  const [movieTitles, setMovieTitles] = useState([]);
  const [deleteTitle, setDeleteTitle] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addSynopsis, setAddSynopsis] = useState("");
  const [addImageUrl, setAddImageUrl] = useState("");
  const [showDeleteFields, setShowDeleteFields] = useState(false);
  const [showAddFields, setShowAddFields] = useState(false);

  useEffect(() => {
    const fetchMovieTitles = async () => {
      try {
        const response = await axios.get("https://api-app-8ljh.onrender.com/api/movies/obtenerMovie");
        setMovieTitles(response.data.map(movie => ({ id: movie._id, titulo: movie.titulo })));
      } catch (error) {
        console.error("Error al obtener los títulos de las películas:", error);
      }
    };
    fetchMovieTitles();
  }, []);

  const getMovieIdByTitle = (title) => {
    const movie = movieTitles.find(movie => movie.titulo === title);
    return movie ? movie.id : null;
  };

  const handleDelete = async () => {
    try {
      const movieId = getMovieIdByTitle(deleteTitle);
      if (!movieId) {
        alert("No se encontró ninguna película con ese título.");
        return;
      }
      await axios.delete(`https://api-app-8ljh.onrender.com/api/movies/delet/${movieId}`);
      setMovieTitles(movieTitles.filter(movie => movie.titulo !== deleteTitle));
      setDeleteTitle("");
      alert("Película eliminada correctamente.");
    } catch (error) {
      console.error("Error al eliminar la película:", error);
      alert("Error al eliminar la película. Por favor, inténtalo de nuevo.");
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post("https://api-app-8ljh.onrender.com/api/movies/post", {
        titulo: addTitle,
        sinopsis: addSynopsis,
        imagen: addImageUrl,
      });
      setMovieTitles([...movieTitles, { titulo: addTitle }]);
      setAddTitle("");
      setAddSynopsis("");
      setAddImageUrl("");
      alert("Película agregada correctamente.");
    } catch (error) {
      console.error("Error al agregar la película:", error);
      alert("Error al agregar la película. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="movie-titles-container">
      <h2>Títulos de Películas</h2>
      <table className="movie-titles-table">
        <thead>
          <tr>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {movieTitles.map((movie, index) => (
            <tr key={index}>
              <td>{movie.titulo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="action-buttons">
        <button className="toggle-fields-button" onClick={() => setShowDeleteFields(!showDeleteFields)}>
          {showDeleteFields ? "Ocultar Eliminar Película" : "Eliminar Película"}
        </button>
        {showDeleteFields && (
          <div className="delete-fields">
            <h3>Eliminar Película</h3>
            <input
              type="text"
              value={deleteTitle}
              onChange={(e) => setDeleteTitle(e.target.value)}
              placeholder="Título de la película a eliminar"
            />
            <button className="delete-button" onClick={handleDelete}>Eliminar</button>
          </div>
        )}
      </div>
      <div className="action-buttons">
        <button className="toggle-fields-button" onClick={() => setShowAddFields(!showAddFields)}>
          {showAddFields ? "Ocultar Agregar Película" : "Agregar Película"}
        </button>
        {showAddFields && (
          <div className="add-fields">
            <h3>Agregar Película</h3>
            <input
              type="text"
              value={addTitle}
              onChange={(e) => setAddTitle(e.target.value)}
              placeholder="Título de la película"
            />
            <input
              type="text"
              value={addSynopsis}
              onChange={(e) => setAddSynopsis(e.target.value)}
              placeholder="Sinopsis"
            />
            <input
              type="text"
              value={addImageUrl}
              onChange={(e) => setAddImageUrl(e.target.value)}
              placeholder="URL de la imagen"
            />
            <button className="add-button" onClick={handleAdd}>Agregar</button>
          </div>
        )}
      </div>
      {/* Botón para redirigir a la página de inicio de películas */}
      <Link to="/vista-principal"  className="view-fields">Ver Cambios</Link>
    </div>
    
  );
};

export default MovieTitlesTable;
