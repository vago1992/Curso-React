import React from 'react'
import { Link } from 'react-router-dom'

export default function Items({mangas:m}) {

    return (
        <div className='itemList'>
            <div>
                {m.Title}
            </div>
            <div>
                {m.Precio}
            </div>
            <img src={m.Images} className="fotoProducto"/>
            <br/>
            <Link to={`/detalle/${m.id}`}><button className='botonProd'>Detalles producto</button></Link>
        </div>
    )
}



