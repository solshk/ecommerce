import React from 'react'
import NavbarStyle from './Navbar.module.css'
import { Link } from 'react-router-dom'


export default function Navbar() {

  return (
    <nav>
      <ul className={NavbarStyle.lista}>
        <li><Link to="/" className={NavbarStyle.navLink}>INICIO</Link></li>
        <li><Link to="/productos" className={NavbarStyle.navLink}>PRODUCTOS</Link></li>
        <li><Link to="/destacados" className={NavbarStyle.navLink}>DESTACADOS</Link></li>
        <li><Link to="/alta" className={NavbarStyle.navLink}>ALTA DE PRODUCTO</Link></li>
        <li><Link to="/contacto" className={NavbarStyle.navLink}>CONTACTO</Link></li>
        <li><Link to="/carrito" className={NavbarStyle.navLink}>CARRITO</Link></li>
      </ul>
    </nav>
  )
}
