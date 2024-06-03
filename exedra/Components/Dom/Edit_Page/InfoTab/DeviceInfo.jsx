import { useParams } from "react-router-dom";
import getAddress from "../../../Fetch/FetchAddress.jsx";
import { useEffect, useState } from "react";
import getSimDevice from "../../../GetFromDb/GetSimDevice.jsx";

function DeviceInfo() {
  const { idFromPath } = useParams();
  // const selectedDevice = devicesList.find((device) => device.id == idFromPath);

  const [device, setDevice] = useState([]);
  const [addres, setAddress] = useState([]);


  let key = "AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys";

  function saveDevice(event){

    const formElem = event.target;
    const { deviceName, lati, long} = formElem;
    const editedParams = {
      name: deviceName.value,
      "controllerCoords": {
        "coordinates": [long.value, lati.value]
      }
    }

    console.log(editedParams);

    fetch(`http://localhost:3000/devicesSim/${idFromPath}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${auth}`,
        },
        body: JSON.stringify(editedParams),

      })
      .then(() => console.log('Device was modified!'))
  
      formElem.reset();
    } 


  useEffect(() => {
    getSimDevice(idFromPath).then((dev) => setDevice(dev));
  }, [idFromPath]);
  // useEffect(() => {
  //   getAddress(lat, lon, key).then((adr) => setAddress(adr));
  // });

  useEffect(() => {
    if (device?.controllerCoords?.coordinates) { 
            const [lon, lat] = device.controllerCoords.coordinates; 
            getAddress(lat, lon, key) 
              .then((adr) => setAddress(adr))
          }
        }, [device]);

  return (
    <div className="deviceInfoZone">

<form onSubmit={saveDevice}>


      <div className="device__id">
      <label htmlFor="deviceId">Device ID:</label>
        <span name="deviceId"> {device.id} </span>
      </div>
      <div className="device__Name">
      <label htmlFor="deviceName">Device Name:</label>
        <input
          name="deviceName"
          id="deviceName"
          type="text"
          
          defaultValue={device?.name}
          />
      </div>
      <div className="device__tenant">
      <label htmlFor="deviceTenant">Device tenant:</label>
        <span name="deviceTenant"> {device.tenant} </span>
      </div>
      <div className="device__coordinates">
        <label htmlFor="deviceCoordinates">Device coordinates: </label>
        <input
          name="deviceCoordinates"
          id="lati"
          type="text"
          defaultValue={device?.controllerCoords?.coordinates[1]}
          />
        <input
          name="deviceCoordinates"
          id="long"
          type="text"
          defaultValue={device?.controllerCoords?.coordinates[0]}
          />
      </div>
      <div className="device__address">
        <label htmlFor="deviceAddress">Device address:</label>
        <span name="deviceAddress"> {addres} </span>
      </div>
      <br />
      <br />
      <button>Save device</button>
          </form>
    </div>
  );
}

export default DeviceInfo;
