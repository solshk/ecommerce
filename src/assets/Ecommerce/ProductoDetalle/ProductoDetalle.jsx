import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductoDetalle() {

    const { id } = useParams();
    // Con este 'id', podríamos hacer una llamada a una API para buscar los datos del producto
    // Al usar { id }, estás usando desestructuración de objetos en JavaScript para extraer solamente la propiedad id 
    // directamente en una variable, haciendo el código más limpio y directo

    const [producto, setProducto] = useState(null);

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
        <div>
            <h2>Detalle del Producto</h2>
            <p>Mostrando información para el producto con ID:
                <strong>{id}</strong></p>

            <h2>Detalle del Producto: {producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '400px'}} />
            <h3>${producto.precio}</h3>
            <p>{producto.descripcion}</p>
        </div>
    )
}
