import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import getSimDevice from '../../../GetFromDb/GetSimDevice.jsx';

function EditDeviceConfiguration() {

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
      <br />
      <div>
          <label htmlFor="lamp">Luminaire: </label>
          <input
            name="lamp"
            id="lamp"
            type="text"
            defaultValue={device?.configuration?.luminaireSpecification}
          />
        </div>
        <div>
          <label htmlFor="socket">Device socket type: </label>
          <input
            name="socket"
            id="socket"
            type="text"
            defaultValue={device?.configuration?.luminaireSocket}
          />
        </div>
        <div>
          <label htmlFor="dimming">Device dimming interface: </label>
          <input
            name="dimming"
            id="dimming"
            type="text"
            defaultValue={device?.configuration?.dimmingType}
          />
        </div>
        <div>
          <label htmlFor="daliCount">Device number of drivers: </label>
          <input
            name="daliCount"
            id="daliCount"
            type="number"
            defaultValue={device?.configuration?.daliCount}
          />
        </div>
     
    </div>
)
}

export default EditDeviceConfiguration;

