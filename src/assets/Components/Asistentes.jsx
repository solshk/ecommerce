import React from 'react'
import TarjetaAsistente from './TarjetaAsistente.jsx';

export default function Asistentes() {

  const asistentes = [
    { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '👨 💻' }, 
    { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' }, 
    { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '👩 💻' }
  ];

  return (
    <>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flexWrap: 'wrap'}}>
          {asistentes.map((asistente, index) => (
          <TarjetaAsistente key={index} {...asistente} />
        ))}
      </div>

    </>
  )
}
