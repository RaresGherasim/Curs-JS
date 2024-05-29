import { devicesList } from '../DeviceDB.js';
import PropTypes from 'prop-types'

function DeviceInfo({deviceId}) {
   
    if (!deviceId) {
        deviceId = devicesList[2].id
    }
    const deviceFiltered = devicesList.filter(({ id }) =>
        id.toString() == deviceId
      );
      let device = deviceFiltered[0];

return(
    <div className='deviceInfoZone'>
        <div>Device Id : {device.id} </div>
        <div>Device Name : {device.name} </div>
        <div>Device Address : {device.address} </div>
        <div>Device Coordinates : {device.coords} </div>
        <div>Device Failures : {device.failures} </div>
        <div>Device Configuration : {device.configuration} </div>
        <div>Device Metering : {device.metering} </div>       
    </div>
)
}

export default DeviceInfo;

DeviceInfo.propTypes = {
    deviceId: PropTypes.string,
}

