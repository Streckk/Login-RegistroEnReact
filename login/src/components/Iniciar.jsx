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

      <div className="flex justify-center items-center">
        <img
          src="src/assets/moving-forward-96.svg"
          alt="Moving Forward"
          className="w-3/6 h-64"
        />
      </div>

      <div className="flex flex-col justify-center h-max">


        <div className="self-center h-36 w-3/4 mb-8">
          <h1 className="font-semibold text-xl m-4">Vamos a iniciar sesión.</h1>
          <p className="text-gray-400 text-lg m-4">
            ¡Bienvenido de nuevo, te hemos extrañado!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col items-start ml-8 mb-4">
            <label
              htmlFor="text"
              className="text-black font-semibold text-xs mb-0"
            >
              Username
            </label>
            <input
              type="text"
              name="usuario"
              value={usuario}
              placeholder="Escribe tu username..."
              onChange={handleChange}
              className="placeholder:text-xs border border-gray-500 rounded-md h-12 w-4/5 focus:outline-none sm:w-3/4 md:w-2/4"
            />
          </div>

          <div className="flex flex-col items-start ml-8">
            <label htmlFor="text" className="text-black font-semibold text-xs">
              Password
            </label>
            <input
              type="password"
              name="contrasena"
              value={contrasena}
              placeholder="Escribre tu contraseña..."
              onChange={handleChange}
              className="placeholder:text-xs border border-gray-500  rounded-md h-12 w-4/5 focus:outline-none  sm:w-3/4 md:w-2/4"
            />
          </div>

          <div className="flex flex-row self-center ml-8 mr-16 mt-16">
            <p className="text-xs">Aún no tienes una cuenta?</p>
            <a
              href="#"
              onClick={() => setPage("registrarse")}
              className="bg-white text-black text-xs font-bold ml-2"
            >
              Registrarse
            </a>
          </div>

          <div className="flex flex-col items-start  ml-8 mt-2">
            <button
              type="submit"
              className=" w-4/5 h-14 text-lg text-white bg-black rounded-xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Iniciar;
