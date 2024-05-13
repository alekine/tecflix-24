import React, { useState } from "react";
import axios from "../../server/Axios";
import "../../Estilos/addMovie.css";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const AddMovieForm = () => {
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState(""); // Estado para la categoría
  const navigate = useNavigate(); // Usar useNavigate para redireccionar

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://api-app-8ljh.onrender.com/api/movies/post", {
        titulo: titulo,
        sinopsis: sinopsis,
        imagen: imagen,
        categoria: categoria // Agregar la categoría a la solicitud POST
      });

      // Limpiar los estados después de agregar la película
      setTitulo("");
      setSinopsis("");
      setImagen("");
      setCategoria("");

      alert("Película agregada correctamente!");

      // Redireccionar al inicio después de agregar la película
      navigate("/");
    } catch (error) {
      console.error("Error al agregar la película:", error);
      alert("Error al agregar la película. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="add-movie-container">
      <h2>Agregar Película</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Sinopsis:</label>
          <textarea
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen URL:</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Película</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
