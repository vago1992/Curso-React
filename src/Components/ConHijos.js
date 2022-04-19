import React from 'react'

const ConHijos = (props) => {
  return (
      <>
        <div>Inicia componente con children</div>
        {props.children}
        <div>Termina componente con children</div>


      </>
  )
}

export default ConHijos