import React from 'react'
import Saludo from './Saludo'
import { useState, useEffect } from 'react'
import { getMangas } from './mocks/products'
import { ItemList2 } from './itemList2'
import { useParams } from 'react-router-dom'

export default function ItemListContainer2() {
    const[productos,setProductos]=useState([])
    const[loading,setLoading]=useState(true)
    const{idCategoria}=useParams()

    useEffect(() => {
        if (idCategoria) {
            const mangaData=getMangas()
            setProductos(mangaData)

            .then(resp=>setProductos(resp.filter(prod=>prod.categoria=== idCategoria)))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    
        } else {
            const mangaData=getMangas()
            setProductos(mangaData)
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
                <ItemList2 productos={productos} />
                </>
            )}
        </div>
       
    )
}