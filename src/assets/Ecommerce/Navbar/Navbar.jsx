import React from 'react'
import NavbarStyle from './Navbar.module.css'

export default function Navbar() {

  return (
    <div>
      <ul className={NavbarStyle.lista}>
        <li><a className={NavbarStyle.navLink} href="#">INICIO</a></li>
        <li><a className={NavbarStyle.navLink} href="#">PRODUCTOS</a></li>
        <li><a className={NavbarStyle.navLink} href="#">CONTACTO</a></li>
        <li><a className={NavbarStyle.navLink} href="#">CARRITO</a></li>
      </ul>
    </div>

  )
}
