
import { useState, useEffect } from 'react';
import axios from 'axios';


const Iniciar = ({ setPage }) => {
    const url = 'http://localhost/BackendPHP/Peticiones.php';
    const [formData, setFormData] = useState([]);
    const [error, setError] = useState(null);
    const [formValues, setFormValues] = useState({ usuario: '', contrasena: '' });

    const { usuario, contrasena } = formValues;

    useEffect(() => {
        const Data = async () => {
            try {
                const respuesta = await axios.get(url);
                console.log(respuesta.data);
                setFormData(respuesta.data);
            } catch (error) {
                setError(error.message);
            }
        };
        Data();
    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const usuarioEncontrado = formData.find(user => user.usuario === usuario && user.contrasena === contrasena);
        if (usuarioEncontrado) {
            alert('Inicio de sesión exitoso');
            setPage('Dashboard');
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="usuario"
                    value={usuario}
                    placeholder='Username'
                    onChange={handleChange}
                    className='m-3 bg-black bg-opacity-0 border-b-2 border-white h-7 focus:outline-none '
                />
                <input
                    type="password"
                    name="contrasena"
                    value={contrasena}
                    placeholder='Password'
                    onChange={handleChange}
                    className='m-3 bg-black bg-opacity-0 border-b-2 border-white h-7 focus:outline-none'
                />
                <button type="submit" className='w-4/5 text-lg text-black bg-white rounded-md'>Login</button>

            </form>
            <a href='#' onClick={() => setPage('registrarse')}>Registrarse</a>
        </>
    )
}

export default Iniciar
