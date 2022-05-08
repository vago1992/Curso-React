import React from "react";
import './Menu.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Menu (){
    return (
        <div className="fondo">
            <nav>
                <ul className="menu">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/Mangas"}>Mangas</Link>
                    </li>
                    <li>
                        <Link to={"/Comics"}>Comics</Link>
                    </li>
                    <li>
                        <Link to={"/Merchandising"}>Merchandising</Link>
                    </li>
                    <li>
                        <Link to={"/Contacto"}>Contacto</Link>
                    </li>
                    <li>
                        
                        <CartWidget/>

                        
                    </li>
              
                </ul>
            </nav>
            

        </div>

    )


        
}

export default Menu;

/* 
    function Menu ({item}){
    return (
        <div className="fondo">
            <nav>
                <ul className="menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="servicios.html">Servicios</a>
                    </li>
                    <li>
                        <a href="galeria.html">Galeria</a>
                    </li>
                    <li>
                        <a href="contacto.html">Contacto</a>            
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
              
                </ul>
            </nav>
            {item()}

        </div>

    )

*/

