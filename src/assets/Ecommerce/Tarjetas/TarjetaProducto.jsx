import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import ContadorProductos from '../Compartidos/ContadorProductos.jsx'
import BotonGrande from '../Compartidos/BotonGrande.jsx'
import BotonFavorito from '../Compartidos/BotonFavorito.jsx'

import TarjetaProductoStyle from './TarjetaProducto.module.css'

export default function TarjetaProducto({ id, nombre, categoria, descripcion, precio, stock, esFavorito }) {

    // console.log (nombre, categoria, descripcion, precio)

    const handleAgregarCarrito = () => {
        //faltaría que agregue al carrito oficialmente
        alert(`Agregaste ${nombre} al carrito!`);
    }


    return (
        <div className={TarjetaProductoStyle.card}>

            <img src="prod1.jpg" alt="Imagen" className={TarjetaProductoStyle.imgProducto} />

            <div className={TarjetaProductoStyle.tituloYFav}>
                <h5>{nombre}</h5>
                <BotonFavorito esFavorito={esFavorito} />
            </div>

            <small>{categoria}</small>
            <p>{descripcion}</p>
            <h5>$ {precio}</h5>

            <ContadorProductos id={id} stock={stock} />

            <BotonGrande texto={"Agregar al carrito"} onClick={handleAgregarCarrito} />
        </div>
    )
}
