import React from 'react'
import ProductosStyle from './Productos.module.css'
import TarjetaProducto from '../Compartidos/Tarjetas/TarjetaProducto.jsx'

export default function Productos({data}) {
    return (
        <div className={ProductosStyle.contenedorCards}>
            {data.map((producto, id) => (
                <TarjetaProducto key={producto.id} {...producto} />
            ))}
        </div>
    )
}
