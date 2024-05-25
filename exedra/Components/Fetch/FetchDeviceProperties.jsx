import populateSimDevice from "../Populate/PopulateSimElem";
let propertyList = [] ;

export default async function deviceProperties(authToken){

    
    fetch(`http://localhost:3000/devicesReal`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            //   Authorization: `Bearer ${auth}`,
        },
    })
    .then(res => {
        return res.json()
      })
    .then((response) => {
        let resp = response[0];
        
        console.log(resp);
        for(var property in resp){
            console.log(property);
            propertyList.push(property);
            
        }
        console.log(propertyList);
        propertyList.forEach(prop => {
            
            fetch(`http://localhost:3000/devicesSim`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    //   Authorization: `Bearer ${auth}`,
                },
            })
            .then(res => {
                return res.json()
              })
            .then((response) => {
                response.forEach(device => {
                    console.log(device.id, prop);
                    populateSimDevice(authToken,device.id,prop)
                });
            });
        });
        return(propertyList);
    });
    
}