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
                        <Link to={"/categoria/Manga"}>Mangas</Link>
                    </li>
                    <li>
                        <Link to={"/categoria/Comics"}>Comics</Link>
                    </li>
                    <li>
                        <Link to={"/categoria/Merchandising"}>Merchandising</Link>
                    </li>
                    <li>
                        <Link to={"/categoria/Contacto"}>Contacto</Link>
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



