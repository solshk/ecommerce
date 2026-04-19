import { useState } from 'react'
import './App.css'

import Bienvenida from './assets/Components/Bienvenida.jsx'
import Asistentes from './assets/Components/Asistentes.jsx'

import LayoutEcommerce from './assets/Ecommerce/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <h1>Ejercicios prácticos</h1>
      
      <section style={{display:'flex', flexDirection: 'column', gap: '1rem'}}>
        <div>
          <details className="cajita">
            <summary>Clase 01</summary>
            <div>
              <Bienvenida/>
            </div>
          </details>
        </div>

        <div>
          <details className="cajita">
            <summary>Clase 02</summary>
            <div>
              <Asistentes/>
            </div>
          </details>
        </div>

      </section>

      <footer>
        holi
      </footer> */}

      {/* <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}

      <LayoutEcommerce/>
    </>
  )
}

export default App
