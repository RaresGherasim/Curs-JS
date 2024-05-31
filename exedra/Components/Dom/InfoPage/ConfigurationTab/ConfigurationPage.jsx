import { useState } from "react";
import DevicesList from "../DevicesButtonList";
import OptionButtons from "../OptionButtons";

import DeviceConfiguration from "./DeviceConfiguration";
import Footer from "../Footer";


function ConfigurationPage() {
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
          Configuration Page
          <br />
          <br />
          <DeviceConfiguration deviceId={selectedDeviceId} />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfigurationPage;
