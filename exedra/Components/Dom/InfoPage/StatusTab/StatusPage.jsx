import { useState } from "react";
import DevicesList from "../DevicesButtonList";
import OptionButtons from "../OptionButtons";

import DeviceStatus from "./DeviceStatus";
import Footer from "../Footer";

function StatusPage() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  const handleDeviceClick = (deviceId) => {
    setSelectedDeviceId(deviceId);
  };

  return (
    <div>
    <div className="infoPage">
      <div className="deviceListZone">
        <DevicesList handleClick={handleDeviceClick} />
      </div>
      <div className="deviceInfoZone">
        <OptionButtons />
        Status Page
        <br />
        <br />
        <DeviceStatus deviceId={selectedDeviceId} />
        <br />
        <br />
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default StatusPage;
