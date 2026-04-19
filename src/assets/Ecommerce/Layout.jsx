import React from 'react'

import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import LayoutStyle from './Layout.module.css'

export default function LayoutEcommerce() {
  return (
    <div className={LayoutStyle.grid}>
        <Header />
        <Main/>
        <Footer/>
        {/* <header className={LayoutStyle.header}>Header</header>
        <main className={LayoutStyle.main}>Contenido</main>
        <footer className={LayoutStyle.footer}>Footer</footer> */}
    </div>
  )
}
