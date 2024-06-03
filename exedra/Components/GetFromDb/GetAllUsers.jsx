export default async function getAllUsers() {
  const response = await fetch(`http://localhost:3000/Users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${auth}`,
    },
  });

  let data = await response.json();
  return data;
}
