import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSimDevice from "../../../GetFromDb/GetSimDevice";

function DeviceMetering() {
  const { idFromPath } = useParams();
  var [device, setDevice] = useState([]);

  function saveDevice(event) {
    const formElem = event.target;
    console.log(formElem);
    const { deviceActivePower, deviceEnergy } = formElem;
    const editedParams = {
      metering: {
        activeEnergy: {
          value: deviceEnergy?.value,
        },
        activePower: {
          value: deviceActivePower?.value,
        },
      },
    };

    console.log(editedParams);

    fetch(`http://localhost:3000/devicesSim/${idFromPath}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(editedParams),
    }).then(() => console.log("Device was modified!"));

    formElem.reset();
  }

  useEffect(() => {
    getSimDevice(idFromPath).then((dev) => setDevice(dev));
  }, [idFromPath]);

  if (!device) {
    return <p>Loading device information...</p>;
  }

  if (device === null || device === undefined) {
    return <p>Error fetching device information.</p>;
  }

  return (
    <div className="deviceInfoZone">
      <form onSubmit={saveDevice}>
        <div className="device__id">
          <label htmlFor="deviceId">Device ID:</label>
          <span name="deviceId"> {device.id} </span>
        </div>
        <div className="device__Name">
          <label htmlFor="deviceName">Device Name:</label>
          <span name="deviceName"> {device.name} </span>
        </div>
        <br />
        <div>
          <label htmlFor="energy">Cumulative active energy(kWh): </label>
          <input
            name="energy"
            id="energy"
            type="text"
            defaultValue={device?.metering?.activeEnergy?.value}
          />
        </div>
        <div>
          <label htmlFor="energyDate">Cumulative active energy Date: </label>
          <input
            name="energyDate"
            id="energyDate"
            type="text"
            defaultValue={device?.metering?.activeEnergy?.date}
          />
        </div>

        <div>
          <label htmlFor="Power">Active Power(W): </label>
          <input
            name="Power"
            id="Power"
            type="text"
            defaultValue={device?.metering?.activePower?.value}
          />
        </div>
        <div>
          <label htmlFor="PowerDate">Active Power Date: </label>
          <input
            name="PowerDate"
            id="PowerDate"
            type="text"
            defaultValue={device?.metering?.activePower?.date}
          />
        </div>
        <div>
          <label htmlFor="current">RMS current(A): </label>
          <input
            name="current"
            id="current"
            type="text"
            defaultValue={device?.metering?.supplyCurrent?.value}
          />
        </div>
        <div>
          <label htmlFor="currentDate">RMS current Date: </label>
          <input
            name="currentDate"
            id="currentDate"
            type="text"
            defaultValue={device?.metering?.supplyCurrent?.date}
          />
        </div>
        <div>
          <label htmlFor="voltage">RMS voltage(V): </label>
          <input
            name="voltage"
            id="voltage"
            type="text"
            defaultValue={device?.metering?.supplyVoltage?.value}
          />
        </div>
        <div>
          <label htmlFor="voltageDate">RMS voltage Date: </label>
          <input
            name="voltageDate"
            id="voltageDate"
            type="text"
            defaultValue={device?.metering?.supplyVoltage?.date}
          />
        </div>
        <div>
          <label htmlFor="level">Lamp level(%): </label>
          <input
            name="level"
            id="level"
            type="text"
            defaultValue={device?.metering?.actualLightState?.value}
          />
        </div>
        <div>
          <label htmlFor="levelDate">Lamp level Date: </label>
          <input
            name="levelDate"
            id="levelDate"
            type="text"
            defaultValue={device?.metering?.actualLightState?.date}
          />
        </div>
        <br />
        <br />
        <button>Save device</button>
      </form>
    </div>
  );
}

export default DeviceMetering;
