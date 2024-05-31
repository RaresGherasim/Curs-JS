import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSimDevice from '../../../GetFromDb/GetSimDevice.jsx';

function DeviceFailures() {

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
    
      let failures = device.failures?.connectionLost?.value || "Null";
      let supply = device.failures?.supplyLoss?.value || "Null";

    
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
      <div className="device__Failures">
        <label htmlFor="deviceFailures">Device Failures: </label>
        <span name="deviceFailures"> {failures} </span>
      </div>
      <div className="device__dimming">
        <label htmlFor="deviceDimming">Device dimming:</label>
        <span name="deviceDimming"> {supply} </span>
      </div>
     
    </div>
)
}

export default DeviceFailures;



