import React from 'react'
import TarjetaEquipoStyle from './TarjetaEquipo.module.css'

export default function TarjetaEquipo({ id, nombre, email, puesto, img }) {

    return (
        <div className={TarjetaEquipoStyle.card}>

            <img src={img} alt="Imagen" className={TarjetaEquipoStyle.img} />

            <div className={TarjetaEquipoStyle.texto}>
                <h5>{nombre}</h5>
                <div>
                    <p style={{ fontStyle: 'italic' }}>{puesto}</p>
                    <p><small>{email}</small></p>
                </div>
            </div>

        </div>
    )
}