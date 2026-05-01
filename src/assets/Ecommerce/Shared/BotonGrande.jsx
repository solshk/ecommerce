import React from 'react'

import BotonStyle from './BotonGrande.module.css'

export default function BotonGrande({ texto, onClick }) {

    // console.log(texto, onClick);

    return (
        <button className={BotonStyle.boton} onClick={onClick}>
            {texto}
        </button>
    )
}
