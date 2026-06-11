import React from 'react'
import { useState, useEffect } from 'react';
import Nosotros from './Nosotros.jsx'

export default function NosotrosContainer() {
    // este debería ser el contenedor lógico

    const [nosotros, setNosotros] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/nosotros.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de nuestro equipo');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setNosotros(datos);
                // console.log('Equipo cargado!', datos);
            })
            .catch((error) => {
                setError(error.message);
                // console.error('¡Ups! Hubo un error:', error);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) { return <p>Cargando equipo...</p>; }

    if (error) { return <p>Error: {error}</p>; }

    return (
        <Nosotros data={nosotros}/>
    )
}
