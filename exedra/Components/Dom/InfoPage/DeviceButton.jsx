import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DeviceButton({ deviceElem, deviceId }) {
   
    return (
        <li key={deviceElem.id}>
          <Link to={`/view/info/${deviceId}`}> 
            <button className="deviceButton">
              {deviceElem.name}
            </button>
          </Link>
        </li>
      );
    }

export default DeviceButton;

DeviceButton.propTypes = {
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
