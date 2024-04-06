// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AgregarPelicula() {
//   const [newMovieTitle, setNewMovieTitle] = useState('');
//   const [newMovieImage, setNewMovieImage] = useState('');
//   const navigate = useNavigate();

//   const handleAddMovie = () => {
//     if (newMovieTitle.trim() !== '' && newMovieImage.trim() !== '') {
//       const newMovie = { title: newMovieTitle, image: newMovieImage };
//       // Guardar la nueva película en el almacenamiento local del navegador
//       const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];
//       localStorage.setItem('movies', JSON.stringify([...existingMovies, newMovie]));

//       // Redireccionar a la página principal después de agregar la película
//       navigate('/');
//     }
//   };

//   return (
//     <div>
//       <h2>Agregar Película</h2>
//       <input
//         type="text"
//         placeholder="Título de la película"
//         value={newMovieTitle}
//         onChange={(e) => setNewMovieTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="URL de la imagen"
//         value={newMovieImage}
//         onChange={(e) => setNewMovieImage(e.target.value)}
//       />
//       <button onClick={handleAddMovie}>Agregar película</button>
//     </div>
//   );
// }

// export default AgregarPelicula;
