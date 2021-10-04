import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';







const firebaseConfig = {
  apiKey: "AIzaSyDt1RxoybACqJNQXBafGK-zNnu9hR30Bj0",
  authDomain: "oceanic-camera-328004.firebaseapp.com",
  projectId: "oceanic-camera-328004",
  storageBucket: "oceanic-camera-328004.appspot.com",
  messagingSenderId: "663883928009",
  appId: "1:663883928009:web:41ea9fb69ae13fec7f9818",
  measurementId: "G-MP0KM0PW8L"
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
