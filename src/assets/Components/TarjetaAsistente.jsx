import React from 'react'

export default function TarjetaAsistente({nombre, tarea, emoji}) {
    
    // console.log (nombre, tarea, emoji)

  return (
    <div className='tarjetaAsistente'>
        <h3>{nombre}</h3>
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
          <i>{emoji}</i><p>{tarea}</p>
        </div>
    </div>
  )
}
