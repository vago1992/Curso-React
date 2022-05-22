import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export const Firebase=()=>{
    const[mangas,setmangas]=useState()
    useEffect(()=>{
        getMangas()
    },[])
    
    
    const getMangas=()=>{
        const db=getFirestore()
        const mangaCollection= collection(db,"mangas")
        getDocs(mangaCollection).then(snapshot=>{
            if (snapshot.size>0){
                console.log(snapshot)
                const ids=snapshot.docs.map(d=>d.id).join (",")
                console.log(ids)
                const mangaData=snapshot.docs.map(d=>({"id":d.id, ...d.data()}))
                console.log(mangaData)
                setmangas(mangaData)
            }
        })
    
    }
    
    return (
    
        
        <div>


            <>  
            </>
        </div>
        
    )


}

