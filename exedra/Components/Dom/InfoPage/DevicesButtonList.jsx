import { devicesList } from '../DeviceDB.js';
import DeviceButton from './DeviceButton.jsx';
import PropTypes from 'prop-types'

function DevicesList({ handleClick }) {
    
    return(
        <section>
            <ul className='deviceListButtons'>
                { devicesList.map((deviceAtt) => (
                
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