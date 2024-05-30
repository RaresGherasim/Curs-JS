import { useParams } from "react-router-dom";
import { devicesList } from "../../DeviceDB.js";
// import PropTypes from "prop-types";
import getAddress from "../../../Fetch/FetchAddress.jsx";
import { useEffect, useState } from "react";
import getSimDevice from "../../../GetFromDb/GetSimDevice.jsx";

function DeviceInfo() {
  const { idFromPath } = useParams();
  const selectedDevice = devicesList.find((device) => device.id == idFromPath);

  const [device, setDevice] = useState([]);
  const [addres, setAddress] = useState([]);

  let lat = selectedDevice.coords.coordinates[1];
  let lon = selectedDevice.coords.coordinates[0];
  let key = "AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys";

//   getSimDevice(idFromPath);

  useEffect(() => {
    getSimDevice(idFromPath).then((dev) => setDevice(dev));
  }, [idFromPath]);
  useEffect(() => {
    getAddress(lat, lon, key).then((adr) => setAddress(adr));
  });

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
      <div className="device__tenant">
        <label htmlFor="deviceTenant">Device tenant:</label>
        <span name="deviceTenant"> {device.tenant} </span>
      </div>
      <div className="device__coordinates">
        <label htmlFor="deviceCoordinates">Device coordinates:</label>
        <span name="deviceCoordinates"> {lat} , {lon} </span>
      </div>
      <div className="device__address">
        <label htmlFor="deviceAddress">Device address:</label>
        <span name="deviceAddress"> {addres} </span>
      </div>
  
    </div>
  );
}

export default DeviceInfo;

// DeviceInfo.propTypes = {
//   deviceId: PropTypes.string,
// };
