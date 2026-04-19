import React from 'react'

import TarjetaProductoStyle from './TarjetaProducto.module.css'

export default function TarjetaProducto({nombre, categoria, descripcion, precio}) {

  console.log (nombre, categoria, descripcion, precio)

  return (
    <div className={TarjetaProductoStyle.contenedorCards}>
      <div className={TarjetaProductoStyle.card}>
          <img src="../../../../public/prod1.jpg" alt="Imagen" className={TarjetaProductoStyle.imgProducto}/>
          <p>{categoria}</p>
          <h5>{nombre}</h5>
          <p>{descripcion}</p>
          <h5>$ {precio}</h5>
      </div>
    </div>
  )
}
