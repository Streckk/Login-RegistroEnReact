import React, { useState } from "react";
import axios from "axios";

import '../index.css';

const Registrarse = ({ setPage }) => {
  const [Enviados, setEnviados] = useState([]);
  const [Errores, setErrores] = useState(null);
  const [Formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    correo: "",
    usuario: "",
    contrasena: "",
  });
  const { nombre, apellidos, edad, correo, usuario, contrasena } = Formulario;

  const PosteoInformacion = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost/APIRESTful/Peticiones.php",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Se ha enviado la informacion correctamente", result);
      setEnviados(result.data);
    } catch (error) {
      setErrores(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre && apellidos && edad && correo && usuario && contrasena) {
      const infoConvertida = JSON.stringify(Formulario);
      console.log("Se han completado los datos");
      console.log(infoConvertida);
      PosteoInformacion(infoConvertida);
    } else {
      console.log("Faltan datos por rellenar");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...Formulario,
      [name]:
        name === "edad" ? (value === "" ? "" : parseInt(value, 10)) : value, // Manejo especial para edad
    });
  };
  //console.log(Formulario);
  return (
    
    <div className="flex flex-col gap-8">
        <a href="#" onClick={() => setPage("iniciar")}>Regresar</a>

        <h1 className="font-semibold text-xl m-4 text-center">Crea una cuenta ahora!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center  gap-8">
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          className="styleInputs "
          placeholder="Nombre"
        />
        <input
          type="text"
          name="apellidos"
          value={apellidos}
          onChange={handleChange}
          className="styleInputs "
          placeholder="Apellidos"
        />

        <input 
        type="number" 
        name="edad" 
        value={edad} 
        onChange={handleChange} 
        className="styleInputs "
        placeholder="Edad"
        />

        <input
          type="email"
          name="correo"
          value={correo}
          onChange={handleChange}
          className="styleInputs "
          placeholder="Correo"
        />

        <input
          type="text"
          name="usuario"
          value={usuario}
          onChange={handleChange}
          className="styleInputs "
          placeholder="Username"
        />
        <input
          type="password"
          name="contrasena"
          value={contrasena}
          onChange={handleChange}
          className="styleInputs "
          placeholder="Contraseña"
        />
        <button type="submit" className="styleButton">Registrarse</button>
      </form>
      {Errores && <p>Error: {Errores}</p>}
      
    </div>
  );
};

export default Registrarse;
