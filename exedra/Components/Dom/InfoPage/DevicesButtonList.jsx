import { devicesList } from '../DeviceDB.js';

function DevicesList() {

    return(
        <section>
            <ul>
                { devicesList.map((device) => (
                    <li key = {device.id}>
                        <button className='deviceButton'> { device.name } </button>
                    </li>
                )) }
            </ul>
        </section>
    )
    }
    
    export default DevicesList;

