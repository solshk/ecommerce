import React from 'react'
import FormularioStyle from './FormularioProducto.module.css'
import BotonSecundario from '../Compartidos/Botones/BotonSecundario.jsx'

export default function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImg }) {
  //este es el componente dumb, sólo recibe y muestra

  return (

    <form onSubmit={manejarEnvio} className={FormularioStyle.form}>
      <h4>Agregar nuevo producto</h4>

      <div className={FormularioStyle.inputContainer}>

        <div className={FormularioStyle.inputDiv}>
          <label className={FormularioStyle.label}>Nombre del Producto</label>
          <input
            type="text"
            placeholder="Ej: Teclado Mecánico"
            name='nombre'
            value={datosForm.nombre}
            onChange={manejarCambio}
            className={FormularioStyle.input}
          />
        </div>

        <div className={FormularioStyle.inputDiv}>
          <label className={FormularioStyle.label}>Precio</label>
          <input
            type="number"
            placeholder="Ej: 100.00"
            name='precio'
            value={datosForm.precio}
            onChange={manejarCambio}
            className={FormularioStyle.input}
          />
        </div>

        <div className={FormularioStyle.inputDiv}>
          <label className={FormularioStyle.label}>Stock</label>
          <input
            type="number"
            placeholder="Ej: 5"
            name='stock'
            value={datosForm.stock}
            onChange={manejarCambio}
            className={FormularioStyle.input}
          />
        </div>

        <div className={FormularioStyle.inputDiv}>
          <label className={FormularioStyle.label}>
             <span className={FormularioStyle.customInputFile}>Imagen</span>
          </label>
          <input
            type="file"
            placeholder="https://..."
            name='imagen'
            value={datosForm.imagen}
            onChange={manejarCambio}
            className={FormularioStyle.input}
          />
        </div>
      </div>

      <BotonSecundario type="submit" texto={"Guardar Producto"} />
    </form>

  )
}
