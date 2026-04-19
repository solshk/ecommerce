import React from 'react'

import Productos from '../Catalogos/CatalogoProductos.jsx'
import TarjetaProducto from '../Tarjetas/TarjetaProducto.jsx'
import LayoutStyle from '../Layout.module.css'

export default function Main() {
  return (
    <main className={LayoutStyle.main}>
        <h1>Aca va el contenido del Ecommerce</h1>
        <section>
          <h2>Productos</h2>
          <Productos/>
        </section>
    </main>
  )
}
