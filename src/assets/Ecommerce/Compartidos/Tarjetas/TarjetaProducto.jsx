import React from 'react'
import { useState, useEffect } from 'react'
import ContadorProductos from '../Contador/ContadorProductos.jsx'
import BotonGrande from '../Botones/BotonGrande.jsx'
import BotonFavorito from '../Botones/BotonFavorito.jsx'
import TarjetaProductoStyle from './TarjetaProducto.module.css'
import { Link } from 'react-router-dom'

export default function TarjetaProducto({ id, nombre, categoria, descripcion, precio, stock, esFavorito, img }) {

    // console.log (nombre, categoria, descripcion, precio)

    const handleAgregarCarrito = () => {
        //faltaría que agregue al carrito oficialmente
        alert(`Agregaste ${nombre} al carrito!`);
    }

    return (
        <Link to={`/producto/${id}`}>
            <div className={TarjetaProductoStyle.card}>

                <img src={img} alt="Imagen" className={TarjetaProductoStyle.img} />

                <div className={TarjetaProductoStyle.tituloCard}>
                    <h5>{nombre}</h5>
                    <BotonFavorito esFavorito={esFavorito} />
                </div>

                <small>{categoria}</small>
                <p>{descripcion}</p>
                <h5>$ {precio}</h5>

                <ContadorProductos id={id} stock={stock} />

                <BotonGrande texto={"Agregar al carrito"} onClick={handleAgregarCarrito} />
            </div>
        </Link>
    )
}
