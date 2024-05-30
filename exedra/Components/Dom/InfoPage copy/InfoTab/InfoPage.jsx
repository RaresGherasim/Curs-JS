import { useState } from "react";
import DevicesList from "../DevicesButtonList";
import OptionButtons from "../OptionButtons";
import DeviceInfo from "./DeviceInfo";

function InfoPage() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  const handleDeviceClick = (deviceId) => {
    setSelectedDeviceId(deviceId);
  };

  return (
    <div className="infoPage">
      <div className="deviceListZone">
        <DevicesList handleClick={handleDeviceClick} />
      </div>
      <div className="deviceInfoZone">
        <OptionButtons deviceId={selectedDeviceId} />
        Info Page
        <br />
        <br />
        <DeviceInfo deviceId={selectedDeviceId} />
      </div>
    </div>
  );
}

export default InfoPage;
