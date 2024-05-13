import React, { useState, useEffect } from "react";
import axios from "../../server/Axios";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "../../Estilos/InicioPeliculas.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías únicas
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para la categoría seleccionada
  const [showAllMovies, setShowAllMovies] = useState(true); // Estado para mostrar todas las películas

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api-app-8ljh.onrender.com/api/movies/obtenerMovie");
        setMovies(response.data);
        // console.log(response)
        // Extraer categorías únicas de las películas
        const uniqueCategories = [...new Set(response.data.map(movie => movie.categoria))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filtrar películas según el texto de búsqueda, la categoría seleccionada y si se muestran todas las películas
  const filteredMovies = movies.filter((movie) =>
    (showAllMovies || movie.categoria === selectedCategory) &&
    movie.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  // Función para manejar el clic en una categoría
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAllMovies(false); // Cambiar el estado para dejar de mostrar todas las películas
  };

  // Función para manejar el clic en el botón "Todos"
  const handleShowAllClick = () => {
    setShowAllMovies(true); // Cambiar el estado para mostrar todas las películas
    setSelectedCategory(""); // Limpiar la categoría seleccionada
  };

  return (
    <div>
      <h1>TexFlix</h1>
      <div className="categories">
        {/* Mostrar el botón "Todos" */}
        <button onClick={handleShowAllClick}>Todos</button>
        {/* Mostrar las categorías como botones */}
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>{category}</button>
        ))}
      </div>
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
