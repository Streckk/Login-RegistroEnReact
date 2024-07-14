import React from 'react';
import { useState, useEffect } from 'react';
import Registrarse from './Registrarse';
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
                <label>Usuario:</label>
                <input
                    type="text"
                    name="usuario"
                    value={usuario}
                    onChange={handleChange}
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    name="contrasena"
                    value={contrasena}
                    onChange={handleChange}
                    className="text-3xl font-bold underline"
                />
                <button type="submit">Submit</button>
            </form>
            <a href='#' onClick={() => setPage('registrarse')}>Registrarse</a>
        </>
    )
}

export default Iniciar
