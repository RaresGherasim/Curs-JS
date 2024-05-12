import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import login from '../login/Login.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
console.log(`main.js loaded`);

const loginBtn = document.querySelector(`#loginbutton`);
const userNameInput = document.querySelector('#userName');
const userPassInput = document.querySelector('#password');




loginBtn.addEventListener('click', function(){
    console.log(`Init username: ${userNameInput.value} and password:${userPassInput.value}`);

    login(userNameInput.value, userPassInput.value);

});






