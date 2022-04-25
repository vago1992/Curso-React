import React, { useEffect, useState } from 'react'

const Contador = () => {

    const [suma, setSuma]= useState (0)
    const [otraSuma, setOtraSuma]= useState (0)

    
    useEffect(() => {
        
        console.log("Render en el mounting")
      
    }, [])
    useEffect(() => {
        
        console.log("Render")
      
    },)
    useEffect(() => {
        
        console.log("Render suma")
      
    },[suma])

    useEffect(() => {
        
        console.log("Render otra suma")
      
    },[otraSuma])
    

    const onClickHandler =() =>{
        console.log("Click")
        setSuma(suma + 1)
    }

  return (
    <div>
        <button onClick={onClickHandler}>Click aqui </button>
        {suma}
    </div>
  )
}

export default Contador