// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext.jsx';
import "bootswatch/dist/minty/bootstrap.min.css"; //aca puedo cambiar los estilos de bootswatch

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>

    <CarritoProvider> {/* Envolvemos la App para que pueda acceder al carrito dsd cualquier parte de la App */}
      <App />
    </CarritoProvider >

  </BrowserRouter>
  // </StrictMode>,
)
