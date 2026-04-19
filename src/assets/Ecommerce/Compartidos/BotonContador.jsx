import React from 'react'

import BotonStyle from './BotonContador.module.css'

export default function BotonContador({ texto, onClick }) {

    // console.log(texto, onClick);

    return (
        <button className={BotonStyle.boton} onClick={onClick}>
            {texto}
        </button>
    )
}
