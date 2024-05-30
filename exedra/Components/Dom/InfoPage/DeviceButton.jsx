import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DeviceButton({ deviceElem, deviceId }) {
   
    return (
        <li key={deviceElem.id}>
          <Link to={`/info/${deviceId}`}> 
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
    coords: PropTypes.string,
    failures: PropTypes.string,
    configuration: PropTypes.string,
    metering: PropTypes.number,
  }),
  onClick: PropTypes.func,
  deviceId: PropTypes.string,
};
