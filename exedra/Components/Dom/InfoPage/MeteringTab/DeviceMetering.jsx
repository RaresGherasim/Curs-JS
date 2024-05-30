import { useParams } from 'react-router-dom';
import { devicesList } from '../../DeviceDB.js';
import PropTypes from 'prop-types'

function DeviceMetering() {

    const {idFromPath} = useParams();
    const selectedDevice = devicesList.find((device) => device.id == idFromPath);
    let device = selectedDevice;

return(
    <div className='deviceInfoZone'>
        <div>Device Id : {device.id} </div>
        <div>Device Name : {device.name} </div>

        <div>Device Metering : {device.metering} </div>       
    </div>
)
}

export default DeviceMetering;

DeviceMetering.propTypes = {
    deviceId: PropTypes.string,
}

