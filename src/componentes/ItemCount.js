import React from 'react';
import { useState } from 'react';
import './Menu.css';
 

export default function ItemCount({stock, onAdd,name}) {
    const [contador,setCount]= useState(1)
    const sumarAlCarrito=()=>{
        if (contador<stock){
            setCount(contador+1)
        }
    }
    const restarAlCarrito=()=>{
        if (contador>1){
            setCount(contador-1)
        }     
    }
    console.log(stock,contador)

    return (
        <div className='moduloCompras'>
            <fieldset className='recuadro'>
                <p>{name}</p>
                <button onClick={sumarAlCarrito} className='countSum'>+</button>
                {contador}
                <button onClick={restarAlCarrito} className='countExtract'>-</button>
                <br></br>
                <button onClick={()=>onAdd(contador)}>Agregar Carrito</button> 

            </fieldset>     
        </div>
    )
}

