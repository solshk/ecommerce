import React from 'react'
import TarjetaEquipo from '../Compartidos/Tarjetas/TarjetaEquipo.jsx'

export default function Nosotros({data}) {
    //DUMB
    // console.log (data)

    return (
        <div>
            <h4 style={{textAlign:'center', padding: '1rem', marginTop: '2rem'}}>Nuestro equipo</h4>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', flexWrap: 'wrap'}}>
                {data.map((empleado, id) => (
                    <TarjetaEquipo key={empleado.id} {...empleado} />
                ))}
            </div>
        </div>
    )
}
