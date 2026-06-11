import React from 'react'
import BotonStyle from './BotonSecundario.module.css'

export default function BotonSecundario({ texto, onClick }) {

    // console.log(texto, onClick);

    return (
        <button className={BotonStyle.boton} onClick={onClick}>
            {texto}
        </button>
    )
}