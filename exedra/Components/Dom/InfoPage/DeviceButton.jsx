import PropTypes from 'prop-types'


function DeviceButton({deviceElem ,deviceId, onClick}) {

  return (
    <li key={deviceElem.id}>
      <button onClick={() => onClick(deviceId)} className="deviceButton"> {deviceElem.name} </button>
      <div> {deviceElem.failures} </div>
    </li>
  );
}

export default DeviceButton;

DeviceButton.propTypes = {
    deviceElem: PropTypes.shape({
        id : PropTypes.string,
        name : PropTypes.string,
        address : PropTypes.string,
        coords : PropTypes.string,
        failures : PropTypes.string,
        configuration : PropTypes.string,
        metering : PropTypes.number,
    }),
    onClick: PropTypes.func,
    deviceId: PropTypes.string
}

