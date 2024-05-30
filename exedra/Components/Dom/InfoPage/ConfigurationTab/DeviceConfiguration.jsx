import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
import { devicesList } from '../../DeviceDB.js';

function DeviceConfiguration() {

    const {idFromPath} = useParams();
    const selectedDevice = devicesList.find((device) => device.id == idFromPath);
    let device = selectedDevice;

return(
    <div className='deviceInfoZone'>
        <div>Device Id : {device.id} </div>
        <div>Device Name : {device.name} </div>
        <div>Device Configuration : {device.configuration} </div>
    
    </div>
)
}

export default DeviceConfiguration;

DeviceConfiguration.propTypes = {
    deviceId: PropTypes.string,
}

