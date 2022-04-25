import React, { useEffect, useState } from 'react'
import {dogs as dogsData} from "../data/dogs"
import DogsCards from './DogsCards'

const DogsContainer = () => {

    const [dogs, setDogs] = useState([])
   useEffect(() => {
     console.log(dogsData);

     const getDogs = new Promise((resolve, reject)=>{
         setTimeout(()=>{
            
            resolve(dogsData)
         },5000)
        
     })

     getDogs.then((result)=>{
        console.log("Se completo la promesa",result)
        setDogs(result)
     }).catch((err)=>{
        console.log("hubo un error", err)
     })

   }, [])
   
  return (
    <div>
    {dogs.map(dog => <DogsCards key={dog.id} dogData={dog}/> )}

    </div>
  )
}

export default DogsContainer
