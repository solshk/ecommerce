import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CarritoContext.jsx';


export default function ProductoDetalle() {

    const { id } = useParams();
    // Con este 'id', podríamos hacer una llamada a una API para buscar los datos del producto
    // Al usar { id }, estás usando desestructuración de objetos en JavaScript para extraer solamente la propiedad id 
    // directamente en una variable, haciendo el código más limpio y directo

    const [producto, setProducto] = useState(null);

    const { addToCart } = useCart(); 
    const handleAgregarCarrito = () => {
        addToCart(producto, 1);
        alert(`Agregaste 1 unidad de ${producto.nombre} al carrito.`);
    };

    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id)); //trae el primero que encuentre en data/productos que tenga ese id
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);

    if (!producto) {
        return <h2>Cargando detalle del producto...</h2>;
    }

    if (!producto.id) {
        return <h2>Producto no encontrado.</h2>;
    }

    return (
        <div style={{margin: 'auto', padding: '5rem 10rem', display: 'flex', flexDirection: 'row', padding: '3rem'}}>

            <img src={producto.img} alt={producto.nombre} 
            style={{height: 'auto', maxWidth: '300px', borderRadius: '5px', paddingRight: '3rem'}}/>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <h2>{producto.nombre}</h2>
                    <p style={{ fontStyle: 'italic', paddingBottom: '1rem'}}>{producto.categoria}</p>
                    <p>{producto.descripcion}</p>
                </div>

                <div>
                    <h4>${producto.precio}</h4>
                    <button className="btn btn-lg btn-secondary" onClick={handleAgregarCarrito} type="button" style={{width: '100%'}}>
                        Agregar al carrito
                    </button>
                </div>

            </div>

        </div>
    )
}
