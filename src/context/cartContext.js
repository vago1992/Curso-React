import { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext([])

export const CartContexProvider =({children})=>{
    const [cartlist,setCartlist]=useState([])
    
    function addToCart(items, cantidad){
        const itemToCart={...items,cantidad:cantidad}
        if (isOnCartlist(items.id)){
            const newCart=[...cartlist];
            const indexEcontrado= newCart.findIndex(
                (product)=>product.id===items.id
            );
            newCart[indexEcontrado].cantidad+=cantidad;
            setCartlist(newCart);

        }else{
            setCartlist((previouscart)=>[...cartlist,itemToCart])
        };
    }
    const isOnCartlist=(id)=>{
        const carrito=cartlist.some((prod)=>prod.id===id);
        console.log(carrito)
        return carrito;
    }
    const sumarCantidad=(item,cantidad)=>{
        const copia=[...cartlist]
        copia.forEach((producto)=>{
            producto.id===item.id &&(producto.cantidad+=cantidad);
        });
    } 
    const deleteItem=(id)=>{
        const itemFiltrado= cartlist.filter((producto)=>producto.id !== id);
        setCartlist(itemFiltrado)
    }
    const vaciarCarrito=()=>{
        setCartlist([])
    }
    const total=()=>{
        const totalCarrito=cartlist.reduce((prev,curr)=>prev+curr.Precio*curr.cantidad,
        0
        );
        console.log(totalCarrito)
        return totalCarrito
    }
    return(
        <CartContex.Provider value={{
            cartlist,
            addToCart,
            sumarCantidad,
            deleteItem,
            vaciarCarrito,
            total
        }}>
            {children}
        </CartContex.Provider>
    )
}