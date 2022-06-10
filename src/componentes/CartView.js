import React, { useContext } from 'react'
import { CartContex } from '../context/cartContext'


const CartView = () => {
  const {cartlist, total,deleteItem,updateStock}=useContext(CartContex)
  return (
    <div>
        {cartlist.map((item)=>(
            <div key={item.id}>
                <h1>{item.nombre}</h1>
                <p>Cantidad:{item.cantidad}</p>
                <p>Precio:${item.Precio}</p>
                <p>Total:${item.Precio*item.cantidad}</p>
                <button onClick={()=>deleteItem(item.id)}>Eliminar</button>
                <button onClick={()=>updateStock(item)}>Comprar</button>


            </div>
            
        ))}
        <h1>Total Compra:${total()}</h1>
    </div>
  )
}

export default CartView