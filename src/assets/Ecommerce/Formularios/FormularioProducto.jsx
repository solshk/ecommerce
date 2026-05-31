import React from 'react'
// import FormularioStyle from './FormularioProducto.module.css'
import BotonSecundario from '../Compartidos/Botones/BotonSecundario.jsx'

export default function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImg }) {
  //este es el componente dumb, sólo recibe y muestra

  return (

    <form onSubmit={manejarEnvio} style={{ padding: '3rem' }}>
      <h4>Agregar nuevo producto</h4>

      <div>
        <div>
          <label className="col-form-label mt-4" htmlFor="nombre">Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Taza alegría"
            name='nombre'
            value={datosForm.nombre}
            onChange={manejarCambio} />
        </div>

        <div>
          <label className="col-form-label mt-4" htmlFor="precio">Precio</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ej: 100.00"
            name='precio'
            value={datosForm.precio}
            onChange={manejarCambio} />
        </div>

        <div>
          <label className="col-form-label mt-4" htmlFor="stock">Stock</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ej: 5"
            name='stock'
            value={datosForm.stock}
            onChange={manejarCambio} />
        </div>

        <div>
          <label className="col-form-label mt-4" htmlFor="imagen">Imagen</label>
          <input
            className="form-control"
            type="file"
            placeholder="https://..."
            name='imagen'
            value={datosForm.imagen}
            onChange={manejarCambio} />
        </div>

      </div>

      {/* <BotonSecundario type="submit" texto={"Guardar Producto"} /> */}
      <button className="btn btn-lg btn-secondary" type="submit" style={{ width: '100%', marginTop: '2rem'}}>
        Guardar producto
      </button>

    </form>

  )
}
