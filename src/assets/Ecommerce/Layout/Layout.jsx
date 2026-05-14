import React from 'react'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import LayoutStyle from './Layout.module.css'
import { Outlet } from 'react-router-dom';

export default function LayoutEcommerce() {

  return (

    <div className={LayoutStyle.grid}>
      <Header />
      <main className={LayoutStyle.outlet}>
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}
