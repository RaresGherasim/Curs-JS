export default async function getAllSimDevices() {
  const response = await fetch(`http://localhost:3000/devicesSim`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${auth}`,
    },
  });

  let data = await response.json();
  return data;
}
