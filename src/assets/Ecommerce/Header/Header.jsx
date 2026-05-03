import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import HeaderStyle from './Header.module.css'

export default function Header() {

  return (

    <nav className={HeaderStyle.header}>
        <a href="#">Mi logo</a>
        <Navbar/>
    </nav>

  )
}
