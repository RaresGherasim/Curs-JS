import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSimDevice from '../../../GetFromDb/GetSimDevice';
import InfoWindowSpan from '../InfoWindow';


function DeviceMetering() {

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
    
      let energy = device.metering?.activeEnergy?.value || 0;
      let power = device.metering?.activePower?.value || 0;
      let current = device.metering?.supplyCurrent?.value || 0;
      let voltage = device.metering?.supplyVoltage?.value || 0;
      let level = device.metering?.actualLightState?.value || 0;
      let hours = device.metering?.operatingHours?.value || 0;
      let supLoss = device.metering?.lampSupplyLossCount?.value || 0;
      let energyDate = device?.metering?.activeEnergy?.date || "Null";
      let powerDate = device?.metering?.activePower?.date || "Null";
      let currentDate = device?.metering?.supplyCurrent?.date || "Null";
      let voltageDate = device?.metering?.supplyVoltage?.date || "Null";
      let levelDate = device?.metering?.actualLightState?.date || "Null";
      
      console.log(energyDate, energy);
      console.log(device.metering);

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
      <div className="device__Energy">
        <label htmlFor="deviceEnergy">Cumulative active energy: </label>
        <InfoWindowSpan spanText={energy} infoText={energyDate} /> 
        <span>kWh</span>
      </div>
      <div className="device__Power">
        <label htmlFor="deviceDimming">Active Power: </label>
        <InfoWindowSpan spanText={[power]} infoText={powerDate} /> 
        <span>W</span>
      </div>
      <div className="device__Current">
        <label htmlFor="deviceCurrent">RMS current: </label>
        <InfoWindowSpan spanText={[current]} infoText={currentDate} /> 
        <span>A</span>
      </div>
      <div className="device__Voltage">
        <label htmlFor="deviceVoltage">RMS voltage: </label>
        <InfoWindowSpan spanText={[voltage]} infoText={voltageDate} /> 
        <span>V</span>
      </div>
      <div className="device__Level">
        <label htmlFor="deviceLevel">Lamp lavel: </label>
        <InfoWindowSpan spanText={[level]} infoText={levelDate} /> 
        <span>%</span>
      </div>
      <br />
      <div className="device__hours">
        <label htmlFor="deviceId">Operating hours:</label>
        <span name="deviceId"> {hours} </span>
      </div>
      <div className="device__supLoss">
      <label htmlFor="supLoss">Count of lamp suppy loss:</label>
        <span name="supLoss"> {supLoss} </span>
      </div>
      
    </div>
)
}

export default DeviceMetering;


