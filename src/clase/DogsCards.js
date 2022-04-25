import React from 'react'

const DogsCards = ({dogData}) => {
  return (
    <div>
        <strong>{dogData.name}</strong>
        <div>{dogData.breed}</div>
    </div>
  )
}

export default DogsCards