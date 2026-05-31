import React from 'react'
import Header from '../Header/Header.jsx'
import Main from '../Inicio/Inicio.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

export default function LayoutEcommerce() {

  return (

    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}
