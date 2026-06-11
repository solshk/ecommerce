import React from 'react'

export default function TarjetaEquipo({ id, nombre, email, puesto, img }) {

    return (
        <div className="card bg-light mb-3" style={{width: '12rem'}}>

            <img src={img} alt="Imagen" className="card-header" />

            <div className="card-body">
                <h5 className='card-title'>{nombre}</h5>
                <div className='card-text'>
                    <p style={{ fontStyle: 'italic' }}>{puesto}</p>
                    <p><small>{email}</small></p>
                </div>
            </div>

        </div>
    )
}