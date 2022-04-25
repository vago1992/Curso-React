import React, { useEffect, useState } from 'react'
import Item from './Item'
import { Productos as productosData } from './mocks/Productos'

const ItemList = () => {
    const [productos,setProductos]=useState([])
    useEffect(() => {
        const getProductos=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve (productosData)
            },3000)
        })
        getProductos.then((result)=>{
            console.log("Se completo el proceso",result)
            setProductos(result)
        }).catch((err)=>{
            console.log("Hubo un error",err)
        })
     
    },[])
    
    return (
        <div>
           { productos.map(product=><Item key={product.id} productosData={product}/>)}
        </div>
    )
    
}

export default ItemList