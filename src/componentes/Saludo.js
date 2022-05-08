import React from 'react'
import "./Menu.css"

export default function Saludo(props) {
    return (
        <div>
            <h2 className='saludo'> {props.saludo}</h2>
        </div>
    )
}
