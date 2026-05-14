import React from 'react'
import Productos from '../Productos/ProductosContainer.jsx'
import FormularioContainer from '../Formularios/FormularioProductoContainer.jsx'
import MainStyle from './Main.module.css'
import ProductosContainer from '../Productos/ProductosContainer.jsx'

export default function Main() {

  return (

    <main className={MainStyle.main}>

      <h1>Aca va el contenido del Ecommerce</h1>

      <section>
        <h2>Nuestros productos desatacados</h2>
        <ProductosContainer />
      </section>

      <section>
        <FormularioContainer />
      </section>

    </main>

  )
}
