import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function EditUsersButton({ userElem, userId }) {
   
    return (
        <li key={userElem.id}>
          <Link to={`users/info/${userId}`}> 
            <button className="deviceButton">
              {userElem.email}
            </button>
          </Link>
        </li>
      );
    }

export default EditUsersButton;

EditUsersButton.propTypes = {
  UserElem: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    coords: PropTypes.any,
    failures: PropTypes.any,
    configuration: PropTypes.any,
    metering: PropTypes.any,
  }),
  onClick: PropTypes.func,
  deviceId: PropTypes.string,
};
