import React from 'react'
import { Link } from 'react-router-dom'


export default function Items({producto}) {


    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            {producto.foto}
            <br/>
            <Link to={`/detalle/${producto.id}`}><button className='botonProd'>Detalles producto</button></Link>
            
        </div>
    )
}



