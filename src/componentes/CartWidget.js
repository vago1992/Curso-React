import carrito from "./carrito.png";
import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

export default function CartWidget() {
    return (
        <Link to={"/cart"}>
            <img src={carrito} className="carrito"/>

        </Link>
        
    )
}
