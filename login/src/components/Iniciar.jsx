import { useState, useEffect } from "react";
import axios from "axios";

const Iniciar = ({ setPage }) => {
  const url = "http://localhost/APIRESTful/Peticiones.php";
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState({ usuario: "", contrasena: "" });

  const { usuario, contrasena } = formValues;

  useEffect(() => {
    const Data = async () => {
      try {
        const respuesta = await axios.get(url);
        //console.log(respuesta.data);
        setFormData(respuesta.data);
      } catch (error) {
        setError(error.message);
      }
    };
    Data();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuarioEncontrado = formData.find(
      (user) => user.usuario === usuario && user.contrasena === contrasena
    );
    if (usuarioEncontrado) {
      alert("Inicio de sesión exitoso");
      setPage("Dashboard");
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      {error && <p>Error: {error}</p>}
        <div className="flex flex-col items-center justify-center max-h-80">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <input
          type="text"
          name="usuario"
          value={usuario}
          placeholder="Username"
          onChange={handleChange}
          className="m-3 bg-black bg-opacity-0 border-b-2 border-white h-7 focus:outline-none  sm:w-3/4 md:w-2/4 "
        />
        <input
          type="password"
          name="contrasena"
          value={contrasena}
          placeholder="Password"
          onChange={handleChange}
          className="m-3 bg-black bg-opacity-0 border-b-2 border-white h-7 focus:outline-none sm:w-3/4 md:w-2/4"
        />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="w-4/5 text-lg text-black bg-white rounded-md sm:w-2/4 md:w-2/4"
          >
            Login
          </button>
        </div>
      </form>
        </div>
        <div className="flex items-center justify-center">
      <a
        href="#"
        onClick={() => setPage("registrarse")}
        className="w-4/5 m-4 bg-white text-black rounded-md text-lg text-center sm:w-2/4"
      >
        Registrarse
      </a>
      </div>
    </>
  );
};

export default Iniciar;
