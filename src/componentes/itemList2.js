import React from 'react'
import Items2 from './Items2'
import './Menu.css';

export const ItemList2 = (productos) => {
    return (
        <div className='itemList'>
            {productos.productos.map((producto)=>(
                <Items2 key={producto.id} producto={producto}/>
            ))}    
        </div>
    )
}