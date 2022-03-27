import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCeRfWk5YC_LcDkcxkcz55i6K_c7UAXa6o",
    authDomain: "react-app-9e317.firebaseapp.com",
    databaseURL: "https://react-app-9e317-default-rtdb.firebaseio.com",
    projectId: "react-app-9e317",
    storageBucket: "react-app-9e317.appspot.com",
    messagingSenderId: "831777992546",
    appId: "1:831777992546:web:af5cd010c42ef051f9863b"
  };

const firebase = initializeApp(firebaseConfig); 
  
export default firebase;