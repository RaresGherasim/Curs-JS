// import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

import newDeviceModel from "./newDeviceModel";

export default function NewDeviceInterface() {
//   const { idFromPath } = useParams();
  const navigate = useNavigate();
  // const selectedDevice = devicesList.find((device) => device.id == idFromPath);

  let newdevice = newDeviceModel;

  function saveDevice(event) {
    const formElem = event.target;
    const {
      deviceName,
      lati,
      long,
      lastAccess,
      energy,
      energyDate,
      Power,
      PowerDate,
      current,
      currentDate,
      voltage,
      voltageDate,
      level,
      levelDate,
      lamp,
      socket,
      dimming,
      daliCount
    } = formElem;
    newdevice.name = deviceName.value;
    newdevice.controllerCoords.coordinates[1] = lati.value;
    newdevice.controllerCoords.coordinates[0] = long.value;
    newdevice.lastAccessTime = lastAccess.value;
    newdevice.metering.activeEnergy.value = energy.value;
    newdevice.metering.activeEnergy.date = energyDate.value;
    newdevice.metering.activePower.value = Power.value;
    newdevice.metering.activePower.date = PowerDate.value;
    newdevice.metering.supplyCurrent.value = current.value;
    newdevice.metering.supplyCurrent.date = currentDate.value;
    newdevice.metering.supplyVoltage.value = voltage.value;
    newdevice.metering.supplyVoltage.date = voltageDate.value;
    newdevice.metering.actualLightState.value = level.value;
    newdevice.metering.actualLightState.date = levelDate.value;
    newdevice.configuration.luminaireSpecification = lamp.value;
    newdevice.configuration.luminaireSocket = socket.value;
    newdevice.configuration.dimmingType = dimming.value;
    newdevice.configuration.daliCount = daliCount.value;
    console.log(newdevice);

    fetch(`http://localhost:3000/devicesSim`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(newdevice),
    }).then(() => navigate(`/view/info/${newdevice.id}`));

    formElem.reset();
  }

  //   useEffect(() => {
  //     getSimDevice(idFromPath).then((dev) => setDevice(dev));
  //   }, [idFromPath]);
  //   useEffect(() => {
  //     getAddress(lat, lon, key).then((adr) => setAddress(adr));
  //   });

  return (
    <div className="newDevicePage">
      <form onSubmit={saveDevice}>
        <div className="device__id">
          <label htmlFor="deviceId">Device ID:</label>
          <span name="deviceId"> {newdevice.id} </span>
        </div>
        <br />
        <div className="device__Name">
          <label htmlFor="deviceName">Device Name:</label>
          <input
            name="deviceName"
            id="deviceName"
            type="text"
            defaultValue={newdevice.name}
          />
        </div>

        <div className="device__coordinates">
          <label htmlFor="deviceCoordinates">Device coordinates: </label>
          <div id="coordinatesNew">
            <input
              name="deviceCoordinates"
              id="lati"
              type="text"
              defaultValue={newdevice.controllerCoords?.coordinates[0]}
            />
            <input
              name="deviceCoordinates"
              id="long"
              type="text"
              defaultValue={newdevice.controllerCoords?.coordinates[1]}
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastAccess">Last access time:</label>
          <input
            name="lastAccess"
            id="lastAccess"
            type="text"
            defaultValue={newdevice.lastAccessTime}
          />
        </div>
        <br />
        <div>
          <label htmlFor="energy">Cumulative active energy(kWh): </label>
          <input
            name="energy"
            id="energy"
            type="text"
            defaultValue={newdevice.metering.activeEnergy.value}
          />
        </div>
        <div>
          <label htmlFor="energyDate">Cumulative active energy Date: </label>
          <input
            name="energyDate"
            id="energyDate"
            type="text"
            defaultValue={newdevice.metering.activeEnergy.date}
          />
        </div>
        <div>
          <label htmlFor="Power">Active Power(W): </label>
          <input
            name="Power"
            id="Power"
            type="text"
            defaultValue={newdevice.metering.activePower.value}
          />
        </div>
        <div>
          <label htmlFor="PowerDate">Active Power Date: </label>
          <input
            name="PowerDate"
            id="PowerDate"
            type="text"
            defaultValue={newdevice.metering.activePower.date}
          />
        </div>
        <div>
          <label htmlFor="current">RMS current(A): </label>
          <input
            name="current"
            id="current"
            type="text"
            defaultValue={newdevice.metering.supplyCurrent.value}
          />
        </div>
        <div>
          <label htmlFor="currentDate">RMS current Date: </label>
          <input
            name="currentDate"
            id="currentDate"
            type="text"
            defaultValue={newdevice.metering.supplyCurrent.date}
          />
        </div>
        <div>
          <label htmlFor="voltage">RMS voltage(V): </label>
          <input
            name="voltage"
            id="voltage"
            type="text"
            defaultValue={newdevice.metering.supplyVoltage.value}
          />
        </div>
        <div>
          <label htmlFor="voltageDate">RMS voltage Date: </label>
          <input
            name="voltageDate"
            id="voltageDate"
            type="text"
            defaultValue={newdevice.metering.supplyVoltage.date}
          />
        </div>
        <div>
          <label htmlFor="level">Lamp level(%): </label>
          <input
            name="level"
            id="level"
            type="text"
            defaultValue={newdevice.metering.actualLightState.value}
          />
        </div>
        <div>
          <label htmlFor="levelDate">Lamp level Date: </label>
          <input
            name="levelDate"
            id="levelDate"
            type="text"
            defaultValue={newdevice.metering.actualLightState.date}
          />
        </div>
        <br />

        <div>
          <label htmlFor="lamp">Luminaire: </label>
          <input
            name="lamp"
            id="lamp"
            type="text"
            defaultValue={newdevice.configuration.luminaireSpecification}
          />
        </div>
        <div>
          <label htmlFor="socket">Device socket type: </label>
          <input
            name="socket"
            id="socket"
            type="text"
            defaultValue={newdevice.configuration.luminaireSocket}
          />
        </div>
        <div>
          <label htmlFor="dimming">Device dimming interface: </label>
          <input
            name="dimming"
            id="dimming"
            type="text"
            defaultValue={newdevice.configuration.dimmingType}
          />
        </div>
        <div>
          <label htmlFor="daliCount">Device number of drivers: </label>
          <input
            name="daliCount"
            id="daliCount"
            type="text"
            defaultValue={newdevice.configuration.daliCount}
          />
        </div>

        <br />
        <br />
        <br />
        <button>Save device</button>
        <br />
      </form>
    </div>
  );
}
