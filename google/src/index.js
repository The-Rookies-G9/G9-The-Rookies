import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';







const firebaseConfig = {
  apiKey: "AIzaSyDEm3Kqe6NrfcLxXgIMcc4FxcoFz_PmVGY",
  authDomain: "login-a1889.firebaseapp.com",
  projectId: "login-a1889",
  storageBucket: "login-a1889.appspot.com",
  messagingSenderId: "620702765740",
  appId: "1:620702765740:web:ae441d28e08d23075d0509",
  measurementId: "G-5HDW5T3Q2X"
};

if(!firebase.app[0]){
  firebase.initializeApp(firebaseConfig);



}

export default firebase;

  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
