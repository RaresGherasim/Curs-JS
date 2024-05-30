import { useParams } from 'react-router-dom';
import { devicesList } from '../../DeviceDB.js';
import PropTypes from 'prop-types'

function DeviceFailures() {

    const {idFromPath} = useParams();
    const selectedDevice = devicesList.find((device) => device.id == idFromPath);
    let device = selectedDevice;

return(
    <div className='deviceInfoZone'>
        <div>Device Id : {device.id} </div>
        <div>Device Name : {device.name} </div>
        <div>Device Failures : {device.failures} </div>
     
    </div>
)
}

export default DeviceFailures;

DeviceFailures.propTypes = {
    deviceId: PropTypes.string,
}

