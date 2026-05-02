import React from 'react'
import Productos from '../Catalogos/ProductosContainer.jsx'
import FormularioContainer from '../Formularios/FormularioContainer.jsx'
import MainStyle from './Main.module.css'
import ProductosContainer from '../Catalogos/ProductosContainer.jsx'

export default function Main() {

  return (

    <main className={MainStyle.main}>

      <h1>Aca va el contenido del Ecommerce</h1>

      <section>
        <h2>Catálogo de productos</h2>
        <ProductosContainer />
      </section>

      <section>
        <FormularioContainer />
      </section>

    </main>

  )
}
