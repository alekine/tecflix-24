import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../server/Axios";
import "../../Estilos/movieResena.css";
import obtenerIdUsuario from "../../utils/jwt";

const MovieResena = () => {
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]); // Estado para almacenar todas las reseñas
  const { id } = useParams();
  const [userName, setUserName] = useState("");

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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://api-app-8ljh.onrender.com/api/obtenerResena`);
        // Filtrar las reseñas basadas en el ID de la película
        const filteredReviews = response.data.filter((review) => review.id_movie === id);
        setReviews(filteredReviews); // Almacenar las reseñas filtradas en el estado
      } catch (error) {
        console.error("Error al obtener las reseñas:", error);
      }
    };

    fetchReviews();
  }, [id]);

  useEffect(() => {
    const obtenerUserName = async () => {
      try {
        const userId = obtenerIdUsuario();
        const response = await axios.get(`https://api-app-8ljh.onrender.com/api/Cuentas/obtener/${userId}`);
        setUserName(response.data.userName);
      } catch (error) {
        console.error("Error al obtener el nombre de usuario:", error);
      }
    };

    obtenerUserName();
  }, []);

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!review.trim()) {
      alert("Por favor, escribe una reseña antes de enviarla.");
      return;
    }
    try {
      const userId = obtenerIdUsuario();
      console.log(userId)
      const response = await axios.post("https://api-app-8ljh.onrender.com/api/addResena", {
        id_movie: movie._id,
        userName: userName, // Utilizamos el nombre de usuario obtenido del estado
        resena: review,
        calificacion: rating
      });
      console.log("Reseña enviada:", response.data);
      // Actualizar la lista de reseñas después de enviar una nueva
      setReviews([...reviews, response.data]);
      setRating(0);
      setReview("");
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
      <div className="user-reviews">
        <h3>Reseñas de Usuarios:</h3>
        {reviews.map((review, index) => (
          <div key={index} className="user-review">
            <p>Nombre de Usuario: {review.userName}</p>
            <p>Calificación: {review.calificacion}</p>
            <p>Reseña: {review.resena}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieResena;
