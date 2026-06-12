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

    // Funciones del carrito aquí...
    
    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
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


    return (
        <CarritoContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal }}>
            {children}
        </CarritoContext.Provider>
    );
};