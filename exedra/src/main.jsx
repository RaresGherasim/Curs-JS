import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import login from '../Components/Auth/Login/Login.jsx'
import App from './App.jsx'


console.log(`main.js loaded`);

// const loginBtn = document.querySelector(`#loginbutton`);
// const userNameInput = document.querySelector('#userName');
// const userPassInput = document.querySelector('#password');


ReactDOM.createRoot(document.getElementById('root')).render(
<div>
     <App />
</div>

  );

// loginBtn.addEventListener('click', function(){
//     console.log(`Init username: ${userNameInput.value} and password:${userPassInput.value}`);

//     login(userNameInput.value, userPassInput.value);

// });






