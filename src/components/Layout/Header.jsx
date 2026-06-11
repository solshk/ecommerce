import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (

    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Mi logo</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link to="/" className="nav-link active">INICIO
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/productos" className="nav-link active">PRODUCTOS
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destacados" className="nav-link active">DESTACADOS
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alta" className="nav-link active">ALTA DE PRODUCTO
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link active">CONTACTO
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="nav-link active">CARRITO
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
          </ul>

          {/* <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form> */}

        </div>
      </div>
    </nav>


  )
}
