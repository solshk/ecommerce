import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

import BotonContador from './BotonContador.jsx'
import ContadorStyle from './ContadorProductos.module.css'

export default function ContadorProductos({id, stock}) {

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
        <div className={ContadorStyle.divBotoncitosMasMenos}>
            <BotonContador texto={"+"} onClick={handleAgregarProducto} />
            <p>{cantidadProducto}</p>
            <BotonContador texto={"-"} onClick={handleQuitarProducto} />
        </div>
    )
}
