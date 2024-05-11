import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
console.log(`main.js loaded`);

const loginBtn = document.querySelector(`#loginbutton`);
const userNameInput = document.querySelector('#userName')
const userPassInput = document.querySelector('#password')
let authToken;

loginBtn.addEventListener('click', function(){
    console.log(`Init username: ${userNameInput.value} and password:${userPassInput.value}`);

    login(userNameInput.value, userPassInput.value);

});

async function login(username, password){

    const requestBody= {
        "email": username,
        "password": password
    }
    const response = await fetch("https://ro-conpet.schreder-exedra.com/api/v2/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      
        body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
      });

      const authentication = await response;
      console.log(authentication);

      if (authentication.errors !== undefined) {
        console.log('authentification error');
        console.log(authentication.errors);
        for(errorField in authentication.errors){
            console.log(errorField, authentication.errors[errorField]);

            const formErrorDiv = document.querySelector(`#${errorField}-error`);
            formErrorDiv.textContent = authentication.errors[errorField];
            console.log(formErrorDiv);
        }
        return;
      }
      else {
        console.log(`Authentification is correct`);
        // authToken = authentication.token;
        authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU3NzBhMDdhY2NjMGMwMDM0ODcxODIwIiwidGVuYW50Ijoicm8tYWItYWJydWQiLCJ0b2tlbklkIjoiYTEwMGQwYWUtN2ViYS00MmQzLThhN2EtYmEwMjhjZDQ3YzE3IiwiaWF0IjoxNzE1NDUzNDA4fQ.aRakkXZOgdgNS8Uy1HcTcw5P00OlBGxxQkkSyILNPHg";


        let deviceID = "f03c7096-380b-4c6f-8542-b3c6aab9dde1";
        let measurement = "activePower";
        let field = "name";
        getDevices(authToken);
        getDevice(authToken,deviceID,field);
        getDeviceMetering(authToken,deviceID,measurement);
        getUsers(authToken);

      }
     
    }

    async function getDevices(requestToken){
        const response = await fetch("https://hyp-shared-prd-we-api-gateway.azure-api.net/platform/exedra/readonly/api/api/v2/devices?field=name&limit=100", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
               "Authorization": `Bearer ${requestToken}`,
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Cache-Control': 'no-cache',
              'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          

          });

          const profileData = await response.json();
          console.log(profileData);
    }


    async function getDeviceMetering(requestToken,requestId,requestMeasure){
        const response = await fetch(`https://hyp-shared-prd-we-api-gateway.azure-api.net/platform/exedra/readonly/api/api/v2/devicemeterings?id=${requestId}&name=${requestMeasure}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
               "Authorization": `Bearer ${requestToken}`,
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Cache-Control': 'no-cache',
              'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          

          });

          const profileData = await response.json();
          console.log(profileData);
    }


    async function getDevice(requestToken, requestId, requestField){
        const response = await fetch(`https://hyp-shared-prd-we-api-gateway.azure-api.net/platform/exedra/readonly/api/api/v2/devices/${requestId}?field=${requestField}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
               "Authorization": `Bearer ${requestToken}`,
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Cache-Control': 'no-cache',
              'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          

          });

          const profileData = await response.json();
          console.log(profileData);
    }

    async function getUsers(requestToken){
        const response = await fetch("https://hyp-shared-prd-we-api-gateway.azure-api.net/platform/exedra/readonly/api/api/v2/users/65770a07accc0c0034871820", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
               "Authorization": `Bearer ${requestToken}`,
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Cache-Control': 'no-cache',
              'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          

          });

          const profileData = await response.json();
          console.log(profileData);
    }



