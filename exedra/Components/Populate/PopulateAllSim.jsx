import deviceProperties from "../Fetch/FetchDeviceProperties";
import populateSimDevice from "./PopulateSimElem";

export default  function populateAllSimElem(token) {
    
    deviceProperties(token)
    .then ( res => {
        console.log(res);
        return res})
    .then ((response) => {
        console.log(response);
    })
    
    // console.log(properties);
  
            // for(property in properties){
            //     console.log(property);
            // }
        // }
       
    // )

    
    // getBreeds()
    // .then (
        //     () => {
            //         for(breed in breeds){
                //             const breedOption = document.createElement('option');
                //             breedOption.textContent = breed;
                //             breedOption.value = breed;

     }