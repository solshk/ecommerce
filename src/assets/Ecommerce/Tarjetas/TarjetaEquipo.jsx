import React from 'react'

import TarjetaEquipoStyle from './TarjetaEquipo.module.css'

export default function TarjetaEquipo({ id, nombre, email, puesto, img }) {

    return (
        <div className={TarjetaEquipoStyle.card}>

            <img src={img} alt="Imagen" className={TarjetaEquipoStyle.imgProducto} />

            <div>
                <h5>{nombre}</h5>
                <p style={{fontStyle: 'italic'}}>{puesto}</p>
                <p style={{fontSize: 'small'}}>{email}</p>
            </div>

        </div>
    )
}