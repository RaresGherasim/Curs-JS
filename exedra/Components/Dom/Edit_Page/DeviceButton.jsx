import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function EditDeviceButton({ deviceElem, deviceId }) {
   
    return (
        <li key={deviceElem.id}>
          <Link to={`/edit/info/${deviceId}`}> 
            <button className="deviceButton">
              {deviceElem.name}
            </button>
          </Link>
        </li>
      );
    }

export default EditDeviceButton;

EditDeviceButton.propTypes = {
  deviceElem: PropTypes.shape({
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
