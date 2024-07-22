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
      
      <a href="#" onClick={() => { setPage('Home') }}>
        <img src="src/assets/flecha.png" alt="" className="w-8 absolute top-8 left-4"/>
      </a>


        <div className="text-center h-36 w-full absolute top-1/4 lg:w-1/2 lg:top-24">
          <h1 className="font-semibold text-xl m-4">Vamos a iniciar sesión.</h1>
          <p className="text-gray-400 text-lg m-4">
            ¡Bienvenido de nuevo, te hemos extrañado!
          </p>
          <img
        src="src/assets/inciar.svg"
        alt="Moving Forward"
        className="hidden lg:block lg:m-8"
      />

        </div>

        <form onSubmit={handleSubmit} className="w-full">
          
          <div className="absolute top-1/2 w-full lg:w-1/2 lg:top-1/4 lg:right-0 xl:top-1/3">
            <h1 className="hidden textresolution">Iniciar Sesión</h1>
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="text"
                className=" text-black font-semibold text-xs mb-0"
              >
                Username
              </label>
              <input
                type="text"
                name="usuario"
                value={usuario}
                placeholder="Escribe tu username..."
                onChange={handleChange}
                className="styleInputs sm:w-3/4 md:w-2/4 lg:w-3/4 xl:w-2/3"
              />
            </div>

            <div className="flex flex-col items-center">
              <label
                htmlFor="text"
                className="text-black font-semibold text-xs"
              >
                Password
              </label>
              <input
                type="password"
                name="contrasena"
                value={contrasena}
                placeholder="Escribre tu contraseña..."
                onChange={handleChange}
                className="styleInputs sm:w-3/4 md:w-2/4 lg:w-3/4 xl:w-2/3"
              />
            </div>
          </div>

          <div className="w-full flex flex-row justify-center absolute bottom-28  xl:bottom-40">
            <p className="text-xs">Aún no tienes una cuenta?</p>
            <a
              href="#"
              onClick={() => setPage("registrarse")}
              className="bg-white text-black text-xs font-bold ml-2"
            >
              Registrarse
            </a>
          </div>

          <div className="w-full flex justify-center absolute bottom-10  xl:bottom-16">
            <button
              type="submit"
              className=" w-1/2 h-14 text-lg text-white bg-black rounded-xl lg:w-3/6 xl:w-1/3"
            >
              Login
            </button>
          </div>
        </form>
      
    </>
  );
};

export default Iniciar;
