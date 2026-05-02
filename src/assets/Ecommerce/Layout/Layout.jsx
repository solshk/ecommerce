import React from 'react'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import LayoutStyle from './Layout.module.css'

export default function LayoutEcommerce() {

  return (

    <div className={LayoutStyle.grid}>
      <Header />
      <Main />
      <Footer />
    </div>

  )
}
