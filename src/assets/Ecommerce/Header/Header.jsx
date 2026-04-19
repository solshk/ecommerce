import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'

import LayoutStyle from '../Layout.module.css'

export default function Header() {
  return (
    <header className={LayoutStyle.header}>
        <p>Mi logo</p>
        <Navbar/>
    </header>
  )
}
