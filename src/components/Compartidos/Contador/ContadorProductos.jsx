import React from 'react'
import { useState, useEffect } from 'react'
import BotonContador from './BotonContador.jsx'
// import ContadorStyle from './ContadorProductos.module.css'

export default function ContadorProductos({ id, stock }) {

    const [cantidadProducto, setCantidadProducto] = useState(0);

    const handleAgregarProducto = () => {
        if ((cantidadProducto + 1) <= stock) {
            setCantidadProducto(prev => prev + 1)
        } else {
            alert(`Haz alcanzado el límite de stock disponible`);
        }
    }

    const handleQuitarProducto = () => {
        setCantidadProducto(prev => Math.max(prev - 1, 0));
    }

    // useEffect(() => {
    //     console.log("Cantidad:", cantidadProducto, "ID:", id, /*"Producto:", nombre*/);
    // }, [cantidadProducto]);

    return (
        <div className="btn-group" role="group">
            <div className="input-group mb-3">
                <button className="btn btn-primary" type="button" onClick={handleQuitarProducto}>-</button>
                <p style={{ width: '30px', textAlign: 'center'}}>{cantidadProducto}</p>
                <button className="btn btn-primary" type="button" onClick={handleAgregarProducto}>+</button>
            </div>
        </div>

    )
}
