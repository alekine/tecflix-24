// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ListaPeliculas() {
//   const [peliculas, setPeliculas] = useState([]);

//   useEffect(() => {
//     // Realizar una solicitud para obtener las películas de la base de datos
//     axios.get('http://localhost:5000/Movies')
//       .then(response => {
//         setPeliculas(response.data); // Almacena las películas en el estado local
//         console.log('Respuesta del servidor:', response.data);
//     setPeliculas(response.data)
        
//       })
//       .catch(error => {
//         console.error('Error al obtener las películas:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Películas</h2>
//       <div className="peliculas-container">
//         {peliculas.map(pelicula => (
//           <div key={pelicula._id} className="pelicula">
//             <img src={pelicula.imagen} alt={pelicula.titulo} />
//             <h3>{pelicula.titulo}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ListaPeliculas;
