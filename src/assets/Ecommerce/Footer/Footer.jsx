import React from 'react'

import LayoutStyle from '../Layout.module.css'
import Nosotros from './Nosotros.jsx'

export default function Footer() {
  return (
    <footer className={LayoutStyle.footer}>
        <p><small>Este es el footer eaea</small></p>
        <p><small>Talento Tech 2026</small></p>
        <Nosotros></Nosotros>
    </footer>
  )
}
