import React from 'react'
import Saludo from './Saludo'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { getProducts } from './mocks/products'
import { ItemList } from './itemList'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {
    const[mangas,setmangas]=useState([])
    const {idCategoria}= useParams()
    console.log(idCategoria)

    useEffect(()=>{
        getMangas()
        .catch(err=>console.log(err))    
    },[idCategoria])
    const getMangas=()=>{
        const db=getFirestore()
        let  mangaCollection=collection(db,"mangas")
        if (typeof idCategoria !== "undefined"){
            mangaCollection= (query(mangaCollection, where("Categoria","==",idCategoria)))
        }
        return getDocs(mangaCollection)
            .then(snapshot=>{
                if (snapshot.size>0){
                    console.log(snapshot)
                    const mangaData=snapshot.docs.map(d=>({"id":d.id, ... d.data()}))
                    setmangas(mangaData)
                    console.log(mangaData)
                    console.log(idCategoria)    
                }     
        })
    }  
    return (
        <div>     
            <><Saludo saludo="Bienvenidos a mi E-Comerce" />
             <ItemList mangas={mangas}/>
            </>
        </div>
    )
}
    /*const[productos,setProductos]=useState([])
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
       
    )*/


