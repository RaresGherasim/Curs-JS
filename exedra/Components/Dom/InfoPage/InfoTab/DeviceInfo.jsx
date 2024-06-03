import {  useNavigate, useParams } from "react-router-dom";
// import PropTypes from "prop-types";
import getAddress from "../../../Fetch/FetchAddress.jsx";
import { useEffect, useState } from "react";
import getSimDevice from "../../../GetFromDb/GetSimDevice.jsx";
import FirstPage from "../../FirstPage/FirstPage.jsx";

function DeviceInfo() {
  const { idFromPath } = useParams();
  const navigate = useNavigate();
  //   const selectedDevice = devicesList.find((device) => device.id == idFromPath);

  
  
  const [device, setDevice] = useState([null]);
  const [addres, setAddress] = useState([]);
  let key = "AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys";
  
  useEffect(() => {
    getSimDevice(idFromPath).then((dev) => setDevice(dev));
  }, [idFromPath]);
  useEffect(() => {
    if (device?.controllerCoords?.coordinates) {
      const [lon, lat] = device.controllerCoords.coordinates;
      getAddress(lat, lon, key).then((adr) => setAddress(adr));
    }
  }, [device]);


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
      <br />
      <div className="device__tenant">
        <label htmlFor="deviceTenant">Device tenant:</label>
        <span name="deviceTenant"> {device.tenant} </span>
      </div>
      <div className="device__coordinates">
        <label htmlFor="deviceCoordinates">Device coordinates:</label>
        <span name="deviceCoordinates">
          {device?.controllerCoords?.coordinates?.length === 2 // Check for valid coordinates
            ? `${device.controllerCoords.coordinates[1]} , ${device.controllerCoords.coordinates[0]}`
            : "N/A"}
        </span>
      </div>
      <div className="device__address">
        <label htmlFor="deviceAddress">Device address:</label>
        <span name="deviceAddress"> {addres} </span>
      </div>
      <br />
      <div className="device__lastAccess">
      <label htmlFor="lastAccess">Device last access time:</label>
        <span name="lastAccess"> {device.lastAccessTime} </span>
      </div>
      <div className="device__firmware">
      <label htmlFor="firmware">Device firmware version:</label>
        <span name="firmware"> {device?.configuration?.firmwareVersion} </span>
      </div>
   
    </div>
  );
}

export default DeviceInfo;


