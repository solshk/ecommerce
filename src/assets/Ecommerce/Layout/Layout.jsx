import React from 'react'
import Header from '../Header/Header.jsx'
import Main from '../Inicio/Inicio.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

import LayoutStyle from './layout.module.css'

export default function LayoutEcommerce() {

  return (

    <div className={LayoutStyle.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}
