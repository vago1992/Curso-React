import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

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