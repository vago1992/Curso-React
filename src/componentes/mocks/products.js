import naruto from "./imagenes/Naruto.jpg";
import jujutsu from "./imagenes/Jujutsu.jpeg";
import berserk from "./imagenes/Berserk.jpg";
import aot from "./imagenes/Attack on titan.jpg";
import DrStone from "./imagenes/Dr stone.jpg";
import './products.css';

const productos=[
    {id:"1", nombre:"Naruto #1",price:650, precio:"$650",stock:100, categoria:"Manga", foto:<img src={naruto} className="fotoProducto"/>},
    {id:"2", nombre:"Jujutsu Kaisen #12", price:650,precio:"$650",stock:55, categoria:"Manga", foto:<img src={jujutsu} className="fotoProducto"/>},
    {id:"3", nombre:"Berserk #28", price:650,precio:"$650",stock:65, categoria:"Manga", foto:<img src={berserk} className="fotoProducto"/>},
    {id:"4", nombre:"Attack on Titan #30", price:850,precio:"$850",stock:85, categoria:"Manga", foto:<img src={aot} className="fotoProducto"/>},
    {id:"5", nombre:"Dr Stone #4", price:650,precio:"$650",stock:85, categoria:"Manga", foto:<img src={DrStone} className="fotoProducto"/>}

];


export const Products= new Promise((resolve,reject)=>{
    
    let condicion=true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        },3000)

    }
    else{
        reject("error")
    }
})
