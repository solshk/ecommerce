import React from 'react'
import TarjetaProducto from '../Tarjetas/TarjetaProducto'

export default function CatalogoProductos() {

    const productos = [
        {
            id: 1,
            nombre: "Taza Artesanal",
            categoria: "Vajilla",
            descripcion: "Hecha a mano con acabado en esmalte moteado.",
            precio: 4500
        },
        {
            id: 2,
            nombre: "Bowl de Cocina",
            categoria: "Vajilla",
            descripcion: "Ideal para cereales o ensaladas, apto para microondas.",
            precio: 6200
        },
        {
            id: 3,
            nombre: "Florero Orgánico",
            categoria: "Decoración",
            descripcion: "Pieza decorativa con textura rústica y minimalista.",
            precio: 8900
        }
    ];

    // console.log (productos)

    return (
        <div>
            {productos.map((producto, id) => (
                <TarjetaProducto key={producto.id} {...producto} />
            ))}
        </div>
    )
}
