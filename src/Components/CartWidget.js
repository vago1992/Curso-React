import React from 'react'
import './Estilos/estilo.css'
import Carrito from "./Imagenes/carrito.png"

const CartWidget = () => {
  return (
    <div>
      <img src={Carrito} className='carrito'/>
    </div>
      
  )
}

export default CartWidget