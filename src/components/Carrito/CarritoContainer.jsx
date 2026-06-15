import React from 'react'
import { useState, useContext, createContext } from 'react'
import { useCart } from '../../context/CarritoContext.jsx';

export default function CarritoContainer() {

  const { cart, clearCart, getCartTotal, addToCart, removeOneFromCart, removeAllFromCart } = useCart(); //traigo las funciones del contexto de carrito que necesito

  // Si el carrito está vacío, mostramos un mensaje
  if (cart.length === 0) {
    return (
      <div style={{ padding: '3rem' }}>
        <h1>El carrito está vacío</h1>
        <p>Agrega productos para continuar la compra.</p>
      </div>
    );
  }

  const handleAgregarProducto = (item) => {
    if (item.quantity < item.stock) {
      addToCart(item, 1);
    } else {
      alert("Has alcanzado el límite de stock disponible");
    }
  };

  const handleQuitarProducto = (id) => {
    removeOneFromCart(id);
  };

  const handleQuitarProductoALL = (id) => {
    removeAllFromCart(id);
  };


  return (
    <div style={{ padding: '3rem' }}>

      <div className='d-flex align-items-center gap-3'>
        <h1>Mi Carrito</h1>
        <button onClick={clearCart} className='btn btn-danger'>Vaciar Carrito</button>
      </div>


      <table className="table table-hover" style={{ margin: '2rem auto' }}>
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>

          {cart.map(item => (
            <tr key={item.id} className="align-middle">
              <td>
                <img src={item.img} alt={item.nombre} style={{ width: '3rem', height: '3rem', objectFit: 'cover', marginRight: '2rem' }} />
                <span>{item.nombre}</span>
              </td>
              <td>
                <div className="btn-group" role="group">
                  <div className="input-group">
                    <button className="btn btn-primary" type="button" onClick={() => handleQuitarProducto(item.id)}>-</button>
                    <button className="btn" type="button" style={{ color: '#888888' }}>{item.quantity}</button>
                    <button className="btn btn-primary" type="button" onClick={() => handleAgregarProducto(item)}>+</button>
                  </div>
                </div>
              </td>
              <td>$ {item.precio}</td>
              <td>$ {item.precio * item.quantity}</td>
              <td>
                <button className="btn btn-primary" type="button" onClick={() => handleQuitarProductoALL(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      <div style={{ display: 'flex', flexDirection: 'column', width: '600px', gap: '1rem', margin: 'auto' }}>

        <h3 style={{ textAlign: 'center' }}>Total a pagar: ${getCartTotal()}</h3>
        <button className="btn btn-lg btn-primary" type="button">Finalizar Compra</button>

      </div>

    </div>
  )
}
