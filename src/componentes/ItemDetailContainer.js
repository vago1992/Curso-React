import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


export default function ItemDetailContainer() {
    const[producto,setProducto]=useState([])
    const{idDetalle}=useParams()


    useEffect(() => {     
        getMangas()
        .catch(err=>console.log(err))
    }, [idDetalle])

    const getMangas=()=>{
        const db=getFirestore()
        const mangaCollection= query(collection(db,"mangas"),where("id","==",idDetalle))
        console.log(mangaCollection)
        return getDocs(mangaCollection).then(snapshot=>{
            if (snapshot.size>0){
                const mangaData=snapshot.docs.map(d=>({"id":d.id, ... d.data()}))
                setProducto(mangaData)
                console.log(mangaData)      
            }     
        })
    }
    return (
        <div>  
                <>
                <ItemDetail producto={producto} />
                </>
        </div>

    )
}