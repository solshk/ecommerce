import { Routes, Route } from 'react-router-dom';
import LayoutEcommerce from './assets/Ecommerce/Layout/Layout.jsx'
import ProductosContainer from './assets/Ecommerce/Productos/ProductosContainer.jsx'
import ProductoDetalle from './assets/Ecommerce/ProductoDetalle/ProductoDetalle.jsx'
import FormularioProductoContainer from './assets/Ecommerce/Formularios/FormularioProductoContainer.jsx'
import './App.css'

function App() {

    {/* <LayoutEcommerce /> */ }

  return (
    <Routes>
      <Route element={<LayoutEcommerce />}>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/destacados" element={<ProductosContainer/>} />
        <Route path="/productos" element={<ProductosContainer/>} />
        <Route path="/producto/:id" element={<ProductoDetalle/>} />
        <Route path="/alta" element={<FormularioProductoContainer />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="/carrito" element={<h1>Mi Carrito</h1>} />
      </Route>
    </Routes>
  )
}

export default App
