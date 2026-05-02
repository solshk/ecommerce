import React from 'react'
import { useState } from 'react';

import FormularioProducto from './FormularioProducto.jsx';

export default function FormularioContainer() {
    //este es el componente con la lógica y se lo pasa a FormularioProducto

    const [datosForm, setDatosForm] = useState({ nombre: '' });

    const handleOnChange = (e) => {};

    const handleOnSubmit = (e) => {};

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={handleOnChange}
      manejarEnvio={handleOnSubmit}
    />
  )
}
