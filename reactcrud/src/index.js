import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

var config = {
  apiKey: "AIzaSyAd3LwAYuvoysMAUjdqBKAfnnstq2GYO6A",
  authDomain: "crudproject-d03e4.firebaseapp.com",
  projectId: "crudproject-d03e4",
  storageBucket: "crudproject-d03e4.appspot.com",
  messagingSenderId: "548914500580",
  appId: "1:548914500580:web:183c574ab1e42c639aadf1"};

firebase.initializeApp(config);  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
