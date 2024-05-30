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
    
return(
    <div className='deviceInfoZone'>
      <div className="device__id">
        <label htmlFor="deviceId">Device ID:</label>
        <span name="deviceId"> {device.id} </span>
      </div>
      <div className="device__Name">
      <label htmlFor="deviceName">Device Name:</label>
        <span name="deviceName"> {device.name} </span>
      </div>
      <div className="device__Luminaire">
        <label htmlFor="deviceLuminaire">Device Luminaire:</label>
        <span name="deviceLuminaire"> {luminaire} </span>
      </div>
      <div className="device__dimming">
        <label htmlFor="deviceDimming">Device dimming:</label>
        <span name="deviceDimming"> {dimming} </span>
      </div>
     
    </div>
)
}

export default DeviceConfiguration;

