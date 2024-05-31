import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSimDevice from '../../../GetFromDb/GetSimDevice';


function DeviceMetering() {

    const {idFromPath} = useParams();
    var [device, setDevice] = useState([]);

    function saveDevice(event){

      const formElem = event.target;
      console.log(formElem);
      const { deviceActivePower, deviceEnergy} = formElem;
      const editedParams = {
        "metering": {
          "activeEnergy": {
              "value": deviceEnergy?.value
          },
          "activePower": {
              "value": deviceActivePower?.value
          }
      }}
  

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
    
      
      if (!device) {
        return <p>Loading device information...</p>;
      }
    
      if (device === null || device === undefined) {
        return <p>Error fetching device information.</p>;
      }
    

return(
    <div className='deviceInfoZone'>
      <form onSubmit={saveDevice}>
      <div className="device__id">
        <label htmlFor="deviceId">Device ID:</label>
        <span name="deviceId"> {device.id} </span>
      </div>
      <div className="device__Name">
      <label htmlFor="deviceName">Device Name:</label>
        <span name="deviceName"> {device.name} </span>
      </div>
      <div className="device__Energy">
        <label htmlFor="deviceEnergy">Device Energy: </label>
        <input
          name="deviceEnergy"
          id="deviceEnergy"
          type="text"
          defaultValue={device.metering?.activeEnergy?.value}
          />
      </div>
      <div className="device__ActivePower">
      <label htmlFor="deviceActivePower">Device Active Power: </label>
        <input
          name="deviceActivePower"
          id="deviceActivePower"
          type="text"
          defaultValue={device.metering?.activePower?.value}
          />
      </div>
      <br />
      <br />
      <button>Save device</button>
      </form>
    </div>
)
}

export default DeviceMetering;


