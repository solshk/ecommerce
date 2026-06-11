import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
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
