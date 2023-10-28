import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import CartItems from './context/CartProvider.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyBvdiy4pn-4WrbQrT1ZzLxO_zaGK9y25co",
  authDomain: "coderhouse-ecommerce-21a56.firebaseapp.com",
  projectId: "coderhouse-ecommerce-21a56",
  storageBucket: "coderhouse-ecommerce-21a56.appspot.com",
  messagingSenderId: "357998919207",
  appId: "1:357998919207:web:113878e0435d5eed349802",
  measurementId: "G-YE78KL5LFV"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartItems>
      <App />
    </CartItems>
  </React.StrictMode>,
)
