export default async function getSimDevice(deviceID) {

  const response = await fetch(`http://localhost:3000/devicesSim/${deviceID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${auth}`,
    },
  });

console.log(response.status);


  let data = await response.json();
  console.log(data);
  return data;
}
