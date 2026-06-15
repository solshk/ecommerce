import React from 'react'
import { useState, useEffect } from 'react'
import BotonFavorito from '../Botones/BotonFavorito.jsx'
import { Link } from 'react-router-dom'
import { useCart } from '../../../context/CarritoContext.jsx';

export default function TarjetaProducto({ id, nombre, categoria, descripcion, precio, stock, esFavorito, img }) {

    // console.log (nombre, categoria, descripcion, precio)

    const { addToCart } = useCart(); // Traemos la función del contexto de Carrito

    // Creamos el objeto producto a partir de las props
    const producto = { id, nombre, precio, stock, img };

    const { cart } = useCart();

    const handleAgregarCarrito = () => {
        addToCart(producto, 1);
                console.log('addToCart', producto.id);

    };


    return (

        <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>

            <Link to={`/producto/${id}`} >
                <img
                    src={img} alt="Imagen" style={{ width: '100%', height: '300px', objectFit: 'cover', padding: '1rem' }} />
            </Link>

            <div className="card-body">
                <h4 className="card-title" style={{ color: '#5a5a5a' }}>{nombre}</h4>
                <small className="card-subtitle mb-2 text-muted">{categoria}</small>
                <p className="card-text">{descripcion}</p>
                <p>Stock disponible: {stock}</p>
                <h5 style={{ color: '#5a5a5a' }}>$ {precio}</h5>

                <button className="btn btn-lg btn-secondary" type="button" onClick={handleAgregarCarrito} style={{ width: '100%' }}>
                    Agregar al carrito
                </button>
            </div>

        </div>

    )
}
