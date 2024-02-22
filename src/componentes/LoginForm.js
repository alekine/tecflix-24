// // import React, { useState } from 'react';
// // import { Link, Redirect } from 'react-router-dom'; // Importa Link y Redirect desde react-router-dom
// // import './LoginForm.css'; 

// // function LoginForm() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [redirect, setRedirect] = useState(false); // Estado para controlar la redirección

// //   const handleLogin = () => {
// //     console.log('Iniciar sesión con:', username, password);
// //   };

// //   const handleCreateAccount = () => {
// //     console.log('Crear cuenta');
// //   };

// //   // Redirige al usuario a "/inicio" cuando haga clic en el botón "Acceder sin cuenta"
// //   const handleAccessWithoutAccount = () => {
// //     console.log('Acceder sin cuenta');
// //     setRedirect(true); // Establece redirect en true para activar la redirección
// //   };

// //   // Si redirect es true, redirige a la nueva ruta
// //   if (redirect) {
// //     return <Redirect to="/inicio" />;
// //   }

// //   return (
// //     <div className="login-form">
// //       <h1 className="login-title">TecFlix</h1>
// //       <div className="input-container">
// //         <label className="input-label">Usuario</label>
// //         <input
// //           type="text"
// //           placeholder="Nombre de usuario o correo electrónico"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           className="username-input"
// //         />
// //       </div>
// //       <div className="input-container">
// //         <label className="input-label">Contraseña</label>
// //         <input
// //           type="password"
// //           placeholder="Contraseña"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="password-input"
// //         />
// //       </div>
// //       <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
// //       <div className="button-container">
// //         <button className="secondary-button create-account-button" onClick={handleCreateAccount}>Crear cuenta</button>
// //         <div style={{ width: '20px' }}></div> {/* Espacio horizontal entre los botones */}
// //         {/* Utiliza Link para redirigir al usuario a "/inicio" cuando haga clic en el botón */}
// //         <Link to="/inicio" className="secondary-button access-without-account-button" onClick={handleAccessWithoutAccount}>Acceder sin cuenta</Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LoginForm;


// import React, { useState } from 'react';
// import '../LoginForm.css'; 

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Iniciar sesión con:', username, password);
//   };

//   const handleCreateAccount = () => {
//     console.log('Crear cuenta');
//   };

//   const handleAccessWithoutAccount = () => {
//     console.log('Acceder sin cuenta');
//   };

//   return (
//     <div className="login-form">
//       <h1 className="login-title">TecFlix</h1>
//       <div className="input-container">
//         <label className="input-label">Usuario</label>
//         <input
//           type="text"
//           placeholder="Nombre de usuario o correo electrónico"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="username-input"
//         />
//       </div>
//       <div className="input-container">
//         <label className="input-label">Contraseña</label>
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="password-input"
//         />
//       </div>
//       <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
//       <div className="button-container">
//         <button className="secondary-button create-account-button" onClick={handleCreateAccount}>Crear cuenta</button>
//         <div style={{ width: '20px' }}></div> {/* Espacio horizontal entre los botones */}
//         <button className="secondary-button access-without-account-button" onClick={handleAccessWithoutAccount}>Acceder sin cuenta</button>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

