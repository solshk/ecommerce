import React from 'react'
import { useState } from 'react'

import BotonFavStyle from './BotonFavorito.module.css'

export default function BotonFavorito({ esFavorito }) {

    const [cambiarFavorito, setCambiarFavorito] = useState(esFavorito);


    const toggleFavorito = () => {
        setCambiarFavorito(!cambiarFavorito);
    }

    // useEffect(() => {
    //         console.log("Es favorito:", cambiarFavorito);
    //     }, [cambiarFavorito]);

    return (
        <button
            className={`${BotonFavStyle.estrella} ${cambiarFavorito ? BotonFavStyle.activa : ""}`}
            onClick={toggleFavorito}
        >
            <svg className={BotonFavStyle.icono} viewBox="0 0 24 24">
                <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
            </svg>
            
        </button>
    )
}
