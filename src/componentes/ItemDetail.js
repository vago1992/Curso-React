import React, { useContext, useState } from 'react'



export default function ItemDetail({producto}) {
    

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            <h3>Stock:{producto.stock}</h3>
            {producto.foto}
           
               
            
        </div>

    )

}

