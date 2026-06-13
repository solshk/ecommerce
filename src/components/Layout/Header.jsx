import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CarritoContext.jsx'

export default function Header() {


  //Usamos el hook para acceder a la función getCartQuantity
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();


  return (

    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
      <div className="container-fluid" >
        <Link to="/" className="navbar-brand">Mi logo</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01" >
          <ul className="navbar-nav ms-auto gap-3" >

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
              <Link to="/carrito" className="nav-link active">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
                </svg>
                {totalItems > 0 && <span className="badge bg-warning rounded-pill" >{totalItems}</span>} {/*aparece cuando el carrito tiene items*/}
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
