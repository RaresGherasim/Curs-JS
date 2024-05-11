import getDevice from "../fetch/FetchDeviceInfo";
import getDevices from "../fetch/FetchAllDevices";
import getDeviceMetering from "../fetch/FetchMeasurements";
import getUsers from "../fetch/FetchUsers";

let authToken;
let deviceID = "f03c7096-380b-4c6f-8542-b3c6aab9dde1";
let measurement = "activePower";
let field = "name";
let errorField;

export default async function login(username, password){

    const requestBody= {
        "email": username,
        "password": password
    }
    const response = await fetch("https://ro-ab-abrud.schreder-exedra.com/api/v2/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            credentials: 'same-origin',
          "Content-Type": "application/json",
          "Accept": "application/json",
          'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

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
        console.log(`Token is : ${authentication}`);
        // authToken = authentication.token;
        authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU3NzBhMDdhY2NjMGMwMDM0ODcxODIwIiwidGVuYW50Ijoicm8tYWItYWJydWQiLCJ0b2tlbklkIjoiYTEwMGQwYWUtN2ViYS00MmQzLThhN2EtYmEwMjhjZDQ3YzE3IiwiaWF0IjoxNzE1NDUzNDA4fQ.aRakkXZOgdgNS8Uy1HcTcw5P00OlBGxxQkkSyILNPHg";



        getDevices(authToken);
        getDevice(authToken,deviceID,field);
        getDeviceMetering(authToken,deviceID,measurement);
        getUsers(authToken);

      }
     
    }
