import React from 'react'
import { useState } from 'react'

import BotonFavStyle from './BotonFavorito.module.css'

export default function BotonFavorito({esFavorito}){

    const [cambiarFavorito, setCambiarFavorito] = useState(esFavorito);


    const toggleFavorito = () => {
        setCambiarFavorito(!cambiarFavorito);
    }

    // useEffect(() => {
    //         console.log("Es favorito:", cambiarFavorito);
    //     }, [cambiarFavorito]);

    return (
        <button className={BotonFavStyle.estrella} onClick={toggleFavorito}> {cambiarFavorito ? '⭐' : '☆'}</button>
    )
}
