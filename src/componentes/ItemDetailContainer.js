import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getFirestore} from 'firebase/firestore'


export default function ItemDetailContainer() {
    const[producto,setProducto]=useState([])
    const{idDetalle}=useParams()


    useEffect(() => {     
        getMangas()
        .catch(err=>console.log(err))
    }, [idDetalle])

    const getMangas=()=>{
        const db=getFirestore()
        const mangaCollection= doc(db,"mangas",idDetalle)
        console.log("hello",mangaCollection)
        return getDoc(mangaCollection).then(snapshot=>{            
                const mangaData={"id":snapshot.id, ... snapshot.data()}
                setProducto(mangaData)
                console.log(mangaData)      
            }     
        )
    }
    return (
        <div>  
                <>
                <ItemDetail producto={producto} />
                </>
        </div>

    )
}