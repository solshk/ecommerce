import React from 'react'
import { useState, useEffect } from 'react';

import TarjetaEquipo from '../Tarjetas/TarjetaEquipo.jsx'
import TarjetaEquipoStyle from '../Tarjetas/TarjetaEquipo.module.css'

export default function Nosotros() {

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
        <div>
            <h4 className={TarjetaEquipoStyle.tituloNosotros}>Nuestro equipo</h4>
            <div className={TarjetaEquipoStyle.contenedorCards}>
                {nosotros.map((empleado, id) => (
                    <TarjetaEquipo key={empleado.id} {...empleado} />
                ))}
            </div>

        </div>
    )
}
