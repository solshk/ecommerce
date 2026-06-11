import React from 'react'
import TarjetaProducto from '../Compartidos/Tarjetas/TarjetaProducto.jsx'

export default function Productos({data}) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', flexWrap: 'wrap',padding: '3rem'}}>
            {data.map((producto, id) => (
                <TarjetaProducto key={producto.id} {...producto} />
            ))}
        </div>
    )
}
