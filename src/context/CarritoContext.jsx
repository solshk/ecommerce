import React, { useState, useContext, createContext } from 'react'

export const CarritoContext = createContext(); //PRIMERO creo el contexto del carrito

export const useCart = () => {

    // este hook personalizado nos facilita el consumo del contexto y proporciona un error claro si se usa fuera del proveedor

    const context = useContext(CarritoContext);

    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;

}

export const CarritoProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //inicializamos el estado del carrito

    // todas las funciones del carrito van aca:

    const addToCart = (product, quantity) => {

        //  console.log('addToCart', product.id);

        const itemInCart = cart.find(item => item.id === product.id);

        if (itemInCart) {
            const nuevaCantidad = itemInCart.quantity + quantity;
            if (nuevaCantidad > product.stock) {
                alert(`No hay más stock disponible del producto ${product.nombre}`);
                return;
            }

            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: nuevaCantidad }
                        : item
                )
            );
            alert(`Cantidad del item ${product.nombre} actualizada en el carrito`);

        } else {
            setCart([...cart, { ...product, quantity }]);
            alert(`Item nuevo ${product.nombre}  agregado al carrito`);
        }
    };

    const getCantidadActual = (productId) => {
        const item = cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    const clearCart = () => {
        setCart([]); //vacía el array
    };

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity,
            0);
    };

    const removeOneFromCart = (id) => {
        setCart(cart =>
            cart
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
        alert("Se ha quitado 1 item del carrito");
    };


    return (
        <CarritoContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal, getCantidadActual, removeOneFromCart }}>
            {children}
        </CarritoContext.Provider>
    );
};