import React from 'react'

export default function FormularioProducto({datosForm, manejarCambio, manejarEnvio}) {
    //este es el componente dumb, sólo recibe y muestra

  return (
    <form onSubmit={manejarEnvio}>
      <input name="nombre" value={datosForm.nombre} onChange={manejarCambio}/>
      {/* ...otros inputs... */}
      <button type="submit">Guardar</button>
    </form>
  )
}
