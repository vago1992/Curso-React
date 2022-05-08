import { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext([])

export const CartContexProvider =({children})=>{
    const [cartlist,setCartlist]=useState([])
    
    function addToCart(items, cantidad){
        if (isOnCartlist(items.id)){
            console.log("Ya esta en el carrito")
            sumarCantidad(items,cantidad)
        }else{
            setCartlist([...cartlist,{...items,cantidad}])
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
        const totalCarrito=cartlist.reduce((prev,curr)=>prev+curr.price*curr.cantidad,
        0
        );
        return totalCarrito
    }
    return(
        <CartContex.Provider value={{
            cartlist,
            addToCart,
            deleteItem,
            vaciarCarrito,
            total
        }}>
            {children}
        </CartContex.Provider>
    )
}