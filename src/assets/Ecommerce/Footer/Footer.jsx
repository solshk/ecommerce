import React from 'react'
import Nosotros from '../Nosotros/NosotrosContainer.jsx'
import FooterStyle from './Footer.module.css'

export default function Footer() {

  return (

    <footer className={FooterStyle.footer}>
        <p><small>Este es el footer eaea</small></p>
        <p><small>Talento Tech 2026</small></p>
        
        <Nosotros/>
    </footer>

  )
}
