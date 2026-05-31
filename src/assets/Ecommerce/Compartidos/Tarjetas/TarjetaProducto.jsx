import React from 'react'
import { useState, useEffect } from 'react'
import ContadorProductos from '../Contador/ContadorProductos.jsx'
// import BotonGrande from '../Botones/BotonGrande.jsx'
import BotonFavorito from '../Botones/BotonFavorito.jsx'
// import TarjetaProductoStyle from './TarjetaProducto.module.css'
import { Link } from 'react-router-dom'

export default function TarjetaProducto({ id, nombre, categoria, descripcion, precio, stock, esFavorito, img }) {

    // console.log (nombre, categoria, descripcion, precio)

    const handleAgregarCarrito = () => {
        //faltaría que agregue al carrito oficialmente
        alert(`Agregaste ${nombre} al carrito!`);
    }

    return (

            <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>

                    <Link to={`/producto/${id}`} >
                        <img 
                            src={img} alt="Imagen" 
                            style={{height: '300px', width: '300px', objectFit: 'cover', alignSelf: 'center', padding: '1rem'}}/>
                    </Link>
                    
                <div className="card-body">
                    <h4 className="card-title" style={{color: '#5a5a5a'}}>{nombre}</h4>
                    <small className="card-subtitle mb-2 text-muted">{categoria}</small>
                    <p className="card-text">{descripcion}</p>
                    <h5 style={{color: '#5a5a5a'}}>$ {precio}</h5>

                    {/* <ContadorProductos id={id} stock={stock} /> */}

                    <button className="btn btn-lg btn-secondary" type="button" onClick={handleAgregarCarrito} style={{width: '100%'}}>
                        Agregar al carrito
                    </button>
                </div>

            </div>

    )
}
