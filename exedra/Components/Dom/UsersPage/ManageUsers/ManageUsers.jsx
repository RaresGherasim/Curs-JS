import { useEffect, useState } from 'react';
// import getAllSimDevices from '../../GetFromDb/GetAllSimDevices.jsx';
import PropTypes from 'prop-types'

import getAllUsers from '../../../GetFromDb/GetAllUsers.jsx';
// import EditDeviceButton from '../../Edit_Page/DeviceButton.jsx';
import EditUsersButton from './DeviceButton.jsx';
import ManageFooter from './ManageFooter.jsx';

function EditUsersList({ handleClick }) {
    getAllUsers;

    // const [allDevices, setDevice] = useState([]);
    const [allUsers, setUser] = useState([]);

    useEffect(() => {
        getAllUsers().then((user) => setUser(user));
      }, []);

    return(
        <section>
            <h2>List of users</h2>
            <ul className='deviceListButtons'>
                { allUsers.map((userAtt) => (
                
                    <EditUsersButton userId={userAtt.id}
                     onClick={handleClick}
                      userElem = {userAtt}
                       key = {userAtt.id} />
                )) }
            </ul>
            <ManageFooter />
        </section>
    )
    }
    
    export default EditUsersList;

    EditUsersList.propTypes = {  
        handleClick: PropTypes.func,
    }