import getDevice from "../Fetch/FetchDeviceInfo";

export default async function populateRealDevice(requestToken, requestId, requestField){

let device = getDevice(requestToken, requestId, requestField);

console.log(device);

let response = fetch(`http://localhost:3000/devicesReal/${requestID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    //   Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(device),
});








      const profileData = await response.json();
      console.log(profileData);
}