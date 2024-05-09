import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el ID de la película
import axios from "../../server/Axios";
import "../../Estilos/movieResena.css"


const MovieResena = () => {
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const { id } = useParams(); // Obtiene el id de la película de los parámetros de la URL

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api-app-8ljh.onrender.com/api/movies/obtener/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error al obtener la película:", error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      // Aquí puedes enviar la reseña al servidor
      console.log("Reseña:", review);
      // Aquí puedes realizar cualquier acción adicional, como mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
      // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="movie-resena-container">
      {movie ? (
        <div className="movie-details">
          <div className="movie-image">
            <img src={movie.imagen} alt={movie.titulo} />
          </div>
          <div className="movie-info">
            <h2>{movie.titulo}</h2>
            <p>{movie.sinopsis}</p>
            <div className="rating-section">
              <label>Calificar:</label>
              <input
                type="number"
                min="1"
                max="10"
                value={rating}
                onChange={handleRatingChange}
              />
            </div>
            <div className="review-section">
              <label>Escribir reseña:</label>
              <textarea
                value={review}
                onChange={handleReviewChange}
                rows="4"
              ></textarea>
              <button onClick={handleSubmitReview}>Enviar Reseña</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default MovieResena;
