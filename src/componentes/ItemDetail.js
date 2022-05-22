import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContex } from '../context/cartContext'
import ItemCount from './ItemCount'


export default function ItemDetail({producto}) {
    const[show,setShow]=useState(true)
    const {cartlist, addToCart}=useContext(CartContex)

    const onAdd=(contador)=>{
        addToCart(producto,contador)
        setShow(false)   
    }
    
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            <h3>Stock:{producto.stock}</h3>
            {producto.foto}

            {show ? <ItemCount stock={producto.stock} onAdd={onAdd} name={producto.nombre}/>: 
                <div>
                    <Link to={"/cart"}><button>Finalizar Compra</button></Link>
                    <Link to={"/"}><button>Seguir Comprando</button></Link>
                </div>}   
        </div>
    )
}

