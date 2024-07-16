import React, { useState } from 'react';
import axios from 'axios';
const Registrarse = ({ setPage }) => {
    const [Enviados, setEnviados] = useState([]);
    const [Errores, setErrores] = useState(null);
    const [Formulario, setFormulario] = useState(
        {
            nombre: '',
            apellidos: '',
            edad: '',
            correo: '',
            usuario: '',
            contrasena: ''

        }
    );
    const { nombre, apellidos, edad, correo, usuario, contrasena } = Formulario

    const PosteoInformacion = async (data) => {
        try {
            const result = await axios.post('http://localhost/APIRESTful/Peticiones.php', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Se ha enviado la informacion correctamente', result);
            setEnviados(result.data);
        } catch (error) {
            setErrores(error.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombre && apellidos && edad && correo && usuario && contrasena) {
            const infoConvertida = JSON.stringify(Formulario);
            console.log('Se han completado los datos');
            console.log(infoConvertida);
            PosteoInformacion(infoConvertida);
        } else {
            console.log('Faltan datos por rellenar');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario(
            {
                ...Formulario,
                [name]: name === 'edad' ? (value === '' ? '' : parseInt(value, 10)) : value // Manejo especial para edad
            }
        );
    }
    //console.log(Formulario);
    return (
        <div>
            <h1>Entraste a registrarte</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <label>Apellidos:</label>
                <input
                    type="text"
                    name="apellidos"
                    value={apellidos}
                    onChange={handleChange}
                />

                <label>Edad:</label>
                <input
                    type="number"
                    name="edad"
                    value={edad}
                    onChange={handleChange}
                />

                <label>Correo:</label>
                <input
                    type="email"
                    name="correo"
                    value={correo}
                    onChange={handleChange}
                />

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
                />
                <button type="submit">Submit</button>
            </form>
            {Errores && <p>Error: {Errores}</p>}
            <a href='#' onClick={() => setPage('iniciar')} >Regresar</a>
        </div>


    )
}

export default Registrarse
