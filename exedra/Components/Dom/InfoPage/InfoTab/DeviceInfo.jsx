import { useParams } from "react-router-dom";
import { devicesList } from "../../DeviceDB.js";
import PropTypes from "prop-types";
import getAddress from "../../../Fetch/FetchAddress.jsx";
import { useEffect, useState } from "react";
import getSimDevice from "../../../GetFromDb/GetElemSim.jsx";

function DeviceInfo() {
  const { idFromPath } = useParams();
  const selectedDevice = devicesList.find((device) => device.id == idFromPath);

  const [device, setDevice] = useState([]);
  const [addres, setAddress] = useState([]);
  let adr;
  let lat = selectedDevice.coords.coordinates[1];
  let lon = selectedDevice.coords.coordinates[0];
  let key = "AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys";

  getAddress(lat, lon, key).then((response) => {
    adr = response;
  });

  getSimDevice(idFromPath);

  useEffect(() => {
    getSimDevice(idFromPath).then((dev) => setDevice(dev));
  }, [idFromPath]);
  useEffect(() => {
    getAddress(lat, lon, key).then((add) => setAddress(add));
  });

  return (
    <div className="deviceInfoZone">
      <div>Device Id : {device.id} </div>
      <div>Device Name : {device.name} </div>
      <div>Device Tenant : {device.tenant} </div>
      <div>Device Address : {addres} </div>
      <div>Device Coordinates : {device.coords.coordinates[1]} , {device.coords.coordinates[0]}</div>
    </div>
  );
}

export default DeviceInfo;

DeviceInfo.propTypes = {
  deviceId: PropTypes.string,
};
