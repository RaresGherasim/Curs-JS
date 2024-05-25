import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import login from '../Components/Auth/Login/Login.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
console.log(`main.js loaded`);

const loginBtn = document.querySelector(`#loginbutton`);
const userNameInput = document.querySelector('#userName');
const userPassInput = document.querySelector('#password');


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div>
          <App />
        <BrowserRouter>
        </BrowserRouter>
      </div>
    </React.StrictMode>,
  )

loginBtn.addEventListener('click', function(){
    console.log(`Init username: ${userNameInput.value} and password:${userPassInput.value}`);

    login(userNameInput.value, userPassInput.value);

});






