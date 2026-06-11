import React from 'react'
import { useState } from 'react';

import FormularioProducto from './FormularioProducto.jsx';

export default function FormularioContainer() {
  //este es el componente con la lógica y se lo pasa a FormularioProducto

  const [datosForm, setDatosForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
    // urlImagen: ''
  });

  const [imgFile, setImgFile] = useState(null)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value
    });
  };

  const handleImgChange = (e) => {
    setImgFile(e.target.files[0]);
    //evento.target.files es un array con los archivos seleccionados, pero como solo permitimos uno, tomamos el primero (índice 0).
  }

  // const handleOnSubmit = (e) => {
  //   e.preventDefault(); //para que no se recargue la página
  //   // console.log('Formulario enviado!');
  //   console.log('Enviando los siguientes datos a la API:', datosForm);
  // };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Validamos que el usuario haya seleccionado una imagen
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    // --- Lógica para subir la imagen a Imgbb ---
    const apiKey = 'c3e6f4a109171a75de7d1ca35d81ebc0'; //'TU-API-KEY';
    const formData = new FormData();
    formData.append('image', imagenFile);

    try {
      console.log("Subiendo imagen a Imgbb...");
      const respuestaImgbb = await
        fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
          method: 'POST',
          body: formData,
        });
      const datosImgbb = await respuestaImgbb.json();
      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
        // Unimos la URL de la imagen con el resto de los datos del
        formulario
        const productoCompleto = {
          ...datosForm,
          // Agregamos la URL obtenida
          urlImagen: datosImgbb.data.url
        };
        // Por el momento hacemos un console.log
        console.log('Enviando los siguientes datos COMPLETOS a la API:',
          productoCompleto);
      } else {
        throw new Error('La subida de la imagen a Imgbb falló.');
      }

    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }
  }



  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={handleOnChange}
      manejarEnvio={handleOnSubmit}
      manejarCambioImg={handleImgChange}
    />
  );
}
