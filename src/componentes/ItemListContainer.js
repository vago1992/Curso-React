import React from 'react'
import Saludo from './Saludo'
import { useState, useEffect } from 'react'
import { getProducts } from './mocks/products'
import { ItemList } from './itemList'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
    const[productos,setProductos]=useState([])
    const[loading,setLoading]=useState(true)
    const{idCategoria}=useParams()

    useEffect(() => {
        if (idCategoria) {
            getProducts
            .then(resp=>setProductos(resp.filter(prod=>prod.categoria=== idCategoria)))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    
        } else {
            getProducts
            .then(resp=>setProductos(resp))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))    
        }
       
    }, [idCategoria])
    console.log(idCategoria)
  
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2> 
            ):(
                <><Saludo saludo="Bienvenidos a mi E-Comerce" />
                <ItemList productos={productos} />
                </>
            )}
        </div>
    )
}
