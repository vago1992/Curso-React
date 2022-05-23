import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import MangaCard from './prueba2'

export const Firebase=()=>{
    const[mangas,setmangas]=useState([])
   
    useEffect(()=>{
        getMangas()
        
    },[])

    
    const getMangas=()=>{
        const db=getFirestore()
        const mangaCollection= collection(db,"mangas")
        console.log(mangaCollection)
        getDocs(mangaCollection).then(snapshot=>{
            console.log(snapshot.size,"esta")
            if (snapshot.size>0){
                console.log(snapshot)
                const mangaData=snapshot.docs.map(d=>({"id":d.id, ... d.data()}))
                setmangas(mangaData)
                console.log(mangaData,"hola")   
            }    
        })
    
    }
    return (
        <div>
            {mangas.map(m=><MangaCard item={m}/>)}
            
        </div>
               
    )


}

