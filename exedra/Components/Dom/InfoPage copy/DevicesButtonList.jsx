import { useEffect, useState } from 'react';
import getAllSimDevices from '../../GetFromDb/GetAllSimDevices.jsx';
// import { devicesList } from '../DeviceDB.js';
import DeviceButton from './DeviceButton.jsx';
import PropTypes from 'prop-types'

function DevicesList({ handleClick }) {
    getAllSimDevices;

    const [allDevices, setDevice] = useState([]);

    useEffect(() => {
        getAllSimDevices().then((dev) => setDevice(dev));
      }, []);

    return(
        <section>
            <ul className='deviceListButtons'>
                { allDevices.map((deviceAtt) => (
                
                    <DeviceButton deviceId={deviceAtt.id}
                     onClick={handleClick}
                      deviceElem = {deviceAtt}
                       key = {deviceAtt.id} />
                )) }
            </ul>
        </section>
    )
    }
    
    export default DevicesList;

    DevicesList.propTypes = {  
        handleClick: PropTypes.func,
    }