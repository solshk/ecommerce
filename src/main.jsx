// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "bootswatch/dist/minty/bootstrap.min.css"; //aca puedo cambiar los estilos de bootswatch

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>,
)
