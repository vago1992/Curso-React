import React from 'react'
import CartWidget from './CartWidget'
import './Estilos/estilo.css'

const NavBar = () => {
  return (
      <>
        <div className='fondo'>
            <ul className='menu'>
                <li>
                    <a href='Index'>E-Commerce Santiago</a>
                </li>
                <li>
                    <a href='Zapatillas'> Zapatillas </a>
                </li>

                <li>
                    <a href='Remeras'> Remeras </a>
                </li>

                <li>
                    <a href='Buzos'> Buzos </a>

                </li>

                <li>
                    <a href='Carrito'><CartWidget/></a>
                    
                </li>
            </ul>


        </div>
      
      
      </>

  
  )
}

export default NavBar