import { useEffect, useState } from 'react';
import getAllSimDevices from '../../GetFromDb/GetAllSimDevices.jsx';
import PropTypes from 'prop-types'
import EditDeviceButton from './DeviceButton.jsx';

function EditDevicesList({ handleClick }) {
    getAllSimDevices;

    const [allDevices, setDevice] = useState([]);

    useEffect(() => {
        getAllSimDevices().then((dev) => setDevice(dev));
      }, []);

    return(
        <section>
            <ul className='deviceListButtons'>
                { allDevices.map((deviceAtt) => (
                
                    <EditDeviceButton deviceId={deviceAtt.id}
                     onClick={handleClick}
                      deviceElem = {deviceAtt}
                       key = {deviceAtt.id} />
                )) }
            </ul>
        </section>
    )
    }
    
    export default EditDevicesList;

    EditDevicesList.propTypes = {  
        handleClick: PropTypes.func,
    }