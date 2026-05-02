import React from 'react'
import NavbarStyle from './Navbar.module.css'

export default function Navbar() {

  return (

    <nav>
        <ul className={NavbarStyle.lista}>
            <li><a href="">INICIO</a></li>
            <li><a href="">PRODUCTOS</a></li>
            <li><a href="">CONTACTO</a></li>
            <li><a href="">CARRITO</a></li>
        </ul>
    </nav>

  )
}
