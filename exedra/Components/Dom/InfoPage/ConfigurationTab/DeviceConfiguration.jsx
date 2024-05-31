import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import getSimDevice from '../../../GetFromDb/GetSimDevice.jsx';

function DeviceConfiguration() {

    const {idFromPath} = useParams();
    var [device, setDevice] = useState([]);

    useEffect(() => {
        getSimDevice(idFromPath).then((dev) => setDevice(dev));
      }, [idFromPath]); 
    
      
      if (!device) {
        return <p>Loading device information...</p>;
      }
    
      if (device === null || device === undefined) {
        return <p>Error fetching device information.</p>;
      }
    
      const dimming = device.configuration?.dimmingType || ""; 
      const luminaire = device.configuration?.luminaireSpecification || "";
      const daliCount = device.configuration?.daliCount || "";
      const socket = device.configuration?.luminaireSocket || "";
      const hasSensor = device.configuration?.hasSensor.toString() || "";
      const installDate = device.configuration?.controllerInstallationDate || "";
    
return(
    <div className='deviceInfoZone'>
      <div className="device__id">
        <label htmlFor="deviceId">Device ID: </label>
        <span name="deviceId"> {device.id} </span>
      </div>
      <div className="device__Name">
      <label htmlFor="deviceName">Device Name: </label>
        <span name="deviceName"> {device.name} </span>
      </div>
      <br />
      <div className="device__Luminaire">
        <label htmlFor="deviceLuminaire">Luminaire: </label>
        <span name="deviceLuminaire"> {luminaire} </span>
      </div>
      <div className="device__Socket">
        <label htmlFor="deviceSocket">Device Socket Type: </label>
        <span name="deviceSocket"> {socket} </span>
      </div>
      <div className="device__dimming">
        <label htmlFor="deviceDimming">Device dimming interface: </label>
        <span name="deviceDimming"> {dimming} </span>
      </div>
      <div className="device__daliCount">
        <label htmlFor="daliCount">Device number of drivers: </label>
        <span name="daliCount"> {daliCount} </span>
      </div>
      <div className="device__hasSensor">
        <label htmlFor="hasSensor">Device has Sensor: </label>
        <span name="hasSensor"> {hasSensor} </span>
      </div>
      <div className="device__installDate">
        <label htmlFor="installDate">Device installation date: </label>
        <span name="installDate"> {installDate} </span>
      </div>
     
    </div>
)
}

export default DeviceConfiguration;

