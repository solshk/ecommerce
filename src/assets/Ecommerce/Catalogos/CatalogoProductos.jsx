import React from 'react'
import { useState, useEffect } from 'react';

import TarjetaProducto from '../Tarjetas/TarjetaProducto'
import TarjetaProductoStyle from '../Tarjetas/TarjetaProducto.module.css'

export default function CatalogoProductos() {

    // CatalogoProductos() trae los productos y los muestra en un contenedor de cards

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        fetch('/data/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
                // console.log('¡Productos cargados!', datos);
            })
            .catch((error) => {
                setError(error.message);
                // console.error('¡Ups! Hubo un error:', error);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {return <p>Cargando productos, por favor espere...</p>;}

    if (error) { return <p>Error: {error}</p>; }

    return (
        <div className={TarjetaProductoStyle.contenedorCards}>
            {productos.map((producto, id) => (
                <TarjetaProducto key={producto.id} {...producto} />
            ))}
        </div>
    )
}
