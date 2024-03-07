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
    const response = await fetch("https://quiz-api.siit.ro/api/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      
        body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
      });

      const authentication = await response.json();
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
        authToken = authentication.token;
        getProfile(authToken);

      }
     
    }

    async function getProfile(requestToken){
        const response = await fetch("https://quiz-api.siit.ro/api/profile", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Authorization": `Bearer ${requestToken}`,
              "Content-Type": "application/json",
              "Accept": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          

          });

          const profileData = await response.json()
          console.log(profileData);
    }