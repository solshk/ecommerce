import { Routes, Route } from 'react-router-dom';
import LayoutEcommerce from './components/Layout/Layout.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import ProductosContainer from './components/Productos/ProductosContainer.jsx'
import ProductoDetalle from './components/Productos/ProductoDetalle.jsx'
import FormularioProductoContainer from './components/Formularios/FormularioProductoContainer.jsx'
import CarritoContainer from './components/Carrito/CarritoContainer.jsx'
import './App.css'

function App() {

    {/* <LayoutEcommerce /> */ }

  return (
    <Routes>
      <Route element={<LayoutEcommerce />}>
        <Route path="/" element={<Inicio/>} />
        <Route path="/destacados" element={<ProductosContainer/>} />
        <Route path="/productos" element={<ProductosContainer/>} />
        <Route path="/producto/:id" element={<ProductoDetalle/>} />
        <Route path="/alta" element={<FormularioProductoContainer />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="/carrito" element={<CarritoContainer/>} />
      </Route>
    </Routes>
  )
}

export default App
