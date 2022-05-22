import { initializeApp } from "firebase/app";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore"
import './products.css';

const firebaseConfig = {
    apiKey: "AIzaSyDIWqoHWkjxSJYkz80ONlxZcqc1I0hRTrg",
    authDomain: "ecommerce-santiago.firebaseapp.com",
    projectId: "ecommerce-santiago",
    storageBucket: "ecommerce-santiago.appspot.com",
    messagingSenderId: "906551116310",
    appId: "1:906551116310:web:bc431947574ff3fbe6ab37",
    measurementId: "G-68PV615J58"
};

const app=initializeApp(firebaseConfig)
const db=getFirestore(app)

const productos=[
    {id:"1", nombre:"Naruto #1",price:650, precio:"$650",stock:100, categoria:"Manga", foto:<img src="https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/15925/9786075280202.jpg" className="fotoProducto"/>},
];

async function DataToFireBase(){
    productos.forEach((item)=>{
        const miCollecion= collection(db,"mangas")
        const newDoc=doc(miCollecion);

        setDoc(newDoc,item).then(()=>{
            console.log("Document written with ID:", newDoc.id)})
            .catch(err=>{
                console.error("Error adding document:",err)
            })
    })
}

export default DataToFireBase