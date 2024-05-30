export default async function getSimDevice(deviceID) {
  const response = await fetch(`http://localhost:3000/devicesSim/${deviceID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${auth}`,
    },
  });

  let data = await response.json();
  return data;
}
