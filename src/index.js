import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from 'serviceWorker';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import reportWebVitals from './reportWebVitals';


// const firebase = require('firebase');
// require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyAL2Er1UJO37wDgBSnqoG8-Pq-wHRfJczA",
  authDomain: "evernote-clone-dc0e6.firebaseapp.com",
  projectId: "evernote-clone-dc0e6",
  storageBucket: "evernote-clone-dc0e6.appspot.com",
  messagingSenderId: "1011073233778",
  appId: "1:1011073233778:web:6b3572b07eb9d8d28323eb"
};

firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// serviceWorker.unregister();
