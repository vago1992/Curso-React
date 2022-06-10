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
            <h2>{producto.Title}</h2>
            <h3>Precio:{producto.Price}</h3>
            <h3>Stock:{producto.Stock}</h3>
            <img src={producto.Images} className="fotoProducto"/>

            {show ? <ItemCount stock={producto.Stock} onAdd={onAdd} name={producto.Title}/>: 
                <div>
                    <Link to={"/cart"}><button>Finalizar Compra</button></Link>
                    <Link to={"/"}><button>Seguir Comprando</button></Link>
                </div>}   
        </div>
    )
}

