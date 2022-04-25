import "../Estilos/productos.css"
import naruto from "../Imagenes/Naruto.jpg"
import berserk from "../Imagenes/Berserk.jpg"
import jujutsu from "../Imagenes/Jujutsu.jpeg"
import drStone from "../Imagenes/Dr stone.jpg"
import titan from "../Imagenes/Attack on titan.jpg"



export const Productos =[
    {id:1, nombre:"Naruto #1", precio:650, stock:100, foto:<img src={naruto} className="fotoProducto"/>},
    {id:2, nombre:"Berserk #28", precio:700, stock:120, foto:<img src={berserk} className="fotoProducto"/>},
    {id:3, nombre:"Jujutsu Kaisen #12", precio:550, stock:10, foto:<img src={jujutsu} className="fotoProducto"/>},
    {id:4, nombre:"Dr.Stone #4", precio:450, stock:4, foto:<img src={drStone} className="fotoProducto"/>},
    {id:5, nombre:"Attack on Titan #30", precio:850, stock:90, foto:<img src={titan} className="fotoProducto"/>},
]