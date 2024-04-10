import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Estilos/ResenaForm.css';

function ResenaForm() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [resena, setResena] = useState('');
  const [puntuacion, setPuntuacion] = useState(0);
  const [nombrePelicula, setNombrePelicula] = useState('');
  const location = useLocation();//obtener ubicacion actual de la pagina
  const navigate = useNavigate();//funcion que se utiliza para cambiar de rutas


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const imagen = params.get('imagen');
    if (imagen) {
      setImagenSeleccionada(imagen);
    }
  }, [location.search]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre de la película:', nombrePelicula);
    console.log('Puntuación:', puntuacion);
    console.log('Reseña:', resena);
    // Aquí puedes enviar la reseña a algún servicio o realizar alguna acción adicional
    navigate('/'); // Redirige a la página de inicio después de enviar la reseña
  };


  const handleInicioClick = () => {
    navigate('/');
  };


  return (
    <div className="resena-form">
      <h1 className="title">Tecflix</h1>
      <button className= "inicio-button" onClick={handleInicioClick}>Inicio</button>
      <div className="pelicula-image">
        {imagenSeleccionada && <img src={imagenSeleccionada} alt="Imagen de la película" />}

      
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Nombre de la película:</label>
          <textarea
            type="text"
            value={nombrePelicula}
            onChange={(e) => setNombrePelicula(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Puntuación:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={puntuacion}
            onChange={(e) => setPuntuacion(e.target.value)}
            required
          />
        </div>


        <div className="input-group">
          <label>Reseña:</label>
          <textarea
            value={resena}
            onChange={(e) => setResena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Enviar Reseña</button>
      </form>
    </div>
  );
}

export default ResenaForm;
