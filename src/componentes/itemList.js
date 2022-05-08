import React from 'react'
import Items from './Items'
import './Menu.css';


export const ItemList = (productos) => {
    return (
        <div className='itemList'>
            {productos.productos.map((producto)=>(
                <Items key={producto.id} producto={producto}/>
            ))}
            
        </div>
    )
}

