import { useParams } from 'react-router-dom';
import { devicesList } from '../../DeviceDB.js';
import PropTypes from 'prop-types'

function DeviceInfo() {

    const {idFromPath} = useParams();
    const selectedDevice = devicesList.find((device) => device.id == idFromPath);
    let device = selectedDevice;

return(
    <div className='deviceInfoZone'>
        <div>Device Id : {device.id} </div>
        <div>Device Name : {device.name} </div>
        <div>Device Address : {device.address} </div>
        <div>Device Coordinates : {device.coords} </div>    
    </div>
)
}

export default DeviceInfo;

DeviceInfo.propTypes = {
    deviceId: PropTypes.string,
}

