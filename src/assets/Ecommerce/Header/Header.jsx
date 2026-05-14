import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import HeaderStyle from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

  return (

    <header className={HeaderStyle.header}>
      <Link to="/">Mi logo</Link>
      <Navbar />
    </header>

  )
}
