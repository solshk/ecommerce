import React from 'react'
import Productos from '../Productos/ProductosContainer.jsx'
import FormularioContainer from '../../components/Formularios/FormularioProductoContainer.jsx'
import ProductosContainer from '../Productos/ProductosContainer.jsx'

export default function Inicio() {

  return (

    <main style={{padding: '3rem'}}>

      <h1>Inicio</h1>

      <section>
        <h2>Nuestros productos destacados</h2>
        <ProductosContainer />
      </section>

      <section>
        <FormularioContainer />
      </section>

    </main>

  )
}
