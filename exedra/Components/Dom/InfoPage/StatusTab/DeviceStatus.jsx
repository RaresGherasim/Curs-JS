import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSimDevice from "../../../GetFromDb/GetSimDevice";
import MapContainer from "../../../Maps/test4";
// import getAllSimDevices from "../../../GetFromDb/GetAllSimDevices";
// import MapContainerRest from "../../../Maps/test4 copy";


function DeviceStatus() {


  
  const { idFromPath } = useParams();
  var [device, setDevice] = useState([]);
  // const [allDevices, setDevices] = useState([]);
  
  useEffect(() => {
    getSimDevice(idFromPath).then((dev) => setDevice(dev));
  }, [idFromPath]);
  
  // useEffect(() => {
  //   getAllSimDevices().then((dev) => setDevices(dev));
  // }, []);
  

  if (!device) {
    return <p>Loading device information...</p>;
  }

  if (device === null || device === undefined) {
    return <p>Error fetching device information.</p>;
  }

  let status = device.status || "Null";

  return (
    <div className="deviceInfoZone">
      <div className="device__id">
        <label htmlFor="deviceId">Device ID:</label>
        <span name="deviceId"> {device.id} </span>
      </div>
      <div className="device__Name">
        <label htmlFor="deviceName">Device Name:</label>
        <span name="deviceName"> {device.name} </span>
      </div>
      <div className="device__Status">
        <label htmlFor="deviceStatus">Device Status: </label>
        <span name="deviceFailures"> {status} </span>
      </div>
      <MapContainer
        lat={device?.controllerCoords?.coordinates[1]}
        lng={device?.controllerCoords?.coordinates[0]} 
        // allSimDevices = {allDevices}
      />
      
      <div>
      {/* <MapContainerRest markers={combinedMarkers} /> */}


      
    </div>
    </div>
  );
}

export default DeviceStatus;
