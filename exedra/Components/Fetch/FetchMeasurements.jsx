
export default async function getDeviceMetering(requestToken,requestId,requestMeasure){
    const response = await fetch(`https://hyp-shared-prd-we-api-gateway.azure-api.net/platform/exedra/readonly/api/api/v2/devicemeterings?id=${requestId}&name=${requestMeasure}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        headers: {
           "Authorization": `Bearer ${requestToken}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Cache-Control': 'no-cache',
          'exedra-subscription-key': 'ce41a2f87bdd493fb4734425d6fd9c03'

          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      

      });

      const profileData = await response.json();
      console.log(profileData);
}
