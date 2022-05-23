import React from 'react'
import { Link } from 'react-router-dom'

export default function Items2({producto}) {

    return (
        <div>
            <h2>{producto.Title}</h2>
            <h3>Precio:{producto.Precio}</h3>
            <br/>
            <Link to={`/detalle/${producto.id}`}><button className='botonProd'>Detalles producto</button></Link>
            
        </div>
    )
}