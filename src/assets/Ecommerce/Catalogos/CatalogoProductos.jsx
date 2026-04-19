import React from 'react'

import TarjetaProducto from '../Tarjetas/TarjetaProducto'

import TarjetaProductoStyle from '../Tarjetas/TarjetaProducto.module.css'

export default function CatalogoProductos() {

    // CatalogoProductos() trae los productos y los muestra en un contenedor de cards

    const productos = [
        {
            id: 1,
            nombre: "Taza Artesanal",
            categoria: "Cocina",
            descripcion: "Hecha a mano con acabado en esmalte moteado.",
            precio: 4500,
            stock: 20,
            esFavorito: true
        },
        {
            id: 2,
            nombre: "Bowl de Cocina",
            categoria: "Cocina",
            descripcion: "Ideal para cereales o ensaladas, apto para microondas.",
            precio: 6200,
            stock: 3,
            esFavorito: false
        },
        {
            id: 3,
            nombre: "Florero Orgánico",
            categoria: "Decoración",
            descripcion: "Pieza decorativa con textura rústica y minimalista.",
            precio: 8900,
            stock: 5,
            esFavorito: false
        }
    ];

    // console.log (productos)

    return (
        <div className={TarjetaProductoStyle.contenedorCards}>
            {productos.map((producto, id) => (
                <TarjetaProducto key={producto.id} {...producto} />
            ))}
        </div>
    )
}
