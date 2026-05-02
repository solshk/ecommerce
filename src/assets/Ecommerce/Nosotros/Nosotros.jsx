import React from 'react'
import TarjetaEquipo from '../Compartidos/Tarjetas/TarjetaEquipo.jsx'
import NosotrosStyle from './Nosotros.module.css'

export default function Nosotros({data}) {
    //DUMB
    // console.log (data)

    return (
        <div>
            <h4 className={NosotrosStyle.titulo}>Nuestro equipo</h4>

            <div className={NosotrosStyle.contenedorCards}>
                {data.map((empleado, id) => (
                    <TarjetaEquipo key={empleado.id} {...empleado} />
                ))}
            </div>
        </div>
    )
}
