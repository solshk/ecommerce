import React from 'react'
import { useState } from 'react';

import FormularioProducto from './FormularioProducto.jsx';

export default function FormularioContainer() {
  //este es el componente con la lógica y se lo pasa a FormularioProducto

  const [datosForm, setDatosForm] = useState({ nombre: '', descripcion: 'despripción'});

  const handleOnChange = (e) => {
    setDatosForm(e.target.value);
    console.log(datosForm.nombre);
    console.log(datosForm.descripcion);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); //para que no se recargue la página
    console.log('Formulario enviado!');
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={handleOnChange}
      manejarEnvio={handleOnSubmit}
    />
  )
}
