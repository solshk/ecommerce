import React from 'react'
import { useState, useContext, createContext } from 'react'
import { useCart } from '../../context/CarritoContext.jsx';


export default function CarritoContainer() {

  const { cart, clearCart, getCartTotal } = useCart(); //traigo las funciones del contexto de carrito que necesito

  // Si el carrito está vacío, mostramos un mensaje
  if (cart.length === 0) {
    return (
      <div style={{ padding: '3rem' }}>
        <h1>El carrito está vacío</h1>
        <p>Agrega productos para continuar la compra.</p>
      </div>
    );
  }


  return (
    <div style={{ padding: '3rem' }}>

      <div className='d-flex align-items-center gap-3'>
        <h1>Mi Carrito</h1>
        <button onClick={clearCart} className='btn btn-danger'>Vaciar Carrito</button>
      </div>


      <table className="table table-hover" style={{margin:'2rem auto'}}>
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>

        <tbody>

          {cart.map(item => (
            <tr key={item.id} className="align-middle">
              <td>
                <img src={item.img} alt={item.nombre} style={{ width: '3rem', height: '3rem', objectFit: 'cover', marginRight: '2rem' }} />
                <span>{item.nombre}</span>
              </td>
              <td>{item.quantity}</td>
              <td>$ {item.precio}</td>
              <td>$ {item.precio * item.quantity}</td>
            </tr>
          ))}

        </tbody>
      </table>

      <div style={{ display: 'flex', flexDirection: 'column', width: '600px', gap: '1rem', margin:'auto'}}>
        
        <h3 style={{ textAlign: 'center' }}>Total a pagar: ${getCartTotal()}</h3>
        <button className="btn btn-lg btn-primary" type="button">Finalizar Compra</button>

      </div>

    </div>
  )
}
