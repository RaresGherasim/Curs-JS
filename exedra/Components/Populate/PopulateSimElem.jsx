import getDevice from "../Fetch/FetchDeviceInfo";

export default async function populateSimDevice(requestToken, requestId, requestField){

let device = await getDevice(requestToken, requestId, requestField);

console.log(`Device ${device}`);

let response = fetch(`http://localhost:3000/devicesSim/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    //   Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(device),
});


      const data = await response;
      const printData = data.json();
      console.log(printData);
}