import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import HeaderStyle from './Header.module.css'

export default function Header() {

  return (

    <header className={HeaderStyle.header}>
        <p>Mi logo</p>
        <Navbar/>
    </header>

  )
}
