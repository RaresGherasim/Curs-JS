export default async function getAddress(lat, long, key){
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&location_type=ROOFTOP&result_type=street_address&key=${key}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
        //    "Authorization": `Bearer ${requestToken}`,
        //   "Content-Type": "application/json",
          "Accept": "application/json",
        //   "credentials": 'include'
        //   'Cache-Control': 'no-cache',
        //   'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      

      });

      let addressData = await response;
      console.log(addressData);
      let data = await addressData.json();
      console.log(data.results[0].formatted_address);
}

