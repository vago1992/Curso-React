import React from 'react'

const Item = ({productosData}) => {
  return (
    <div>
        <h4>{productosData.nombre}</h4>
        <div>{productosData.foto}</div>
        <div>Precio: $  {productosData.precio}</div>
    </div>
  )
}

export default Item