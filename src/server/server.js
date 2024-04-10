// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); 

// const app = express();
// const PORT = 5000;

// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/netflix')
//   .then(() => {
//     console.log('Conexión exitosa a MongoDB');
//   })
//   .catch(error => {
//     console.error('Error al conectar a MongoDB:', error);
//   });

// const peliculaSchema = new mongoose.Schema({
//   titulo: String,
//   sinopsis: String,
//   imagen: String,

// });

// const Pelicula = mongoose.model('Pelicula', peliculaSchema);

// app.get('/Movies', async (req, res) => {
//   try {
//     const peliculas = await Pelicula.find();
//     res.json(peliculas);
//   } catch (error) {
//     console.error('Error al obtener las películas:', error);
//     res.status(500).json({ error: 'Error al obtener las películas' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor intermedio corriendo en http://localhost:${PORT}`);
// });
