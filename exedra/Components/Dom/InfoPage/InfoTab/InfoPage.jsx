import { useState } from "react";
import DevicesList from "../DevicesButtonList";
import OptionButtons from "../OptionButtons";
import DeviceInfo from "./DeviceInfo";
import Footer from "../Footer";

function InfoPage() {
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
        <OptionButtons deviceId={selectedDeviceId} />
        Info Page
        <br />
        <br />
        <DeviceInfo deviceId={selectedDeviceId} />
        <br />
        <br />
      </div>
    </div>
        <Footer />
    </div>
  );
}

export default InfoPage;
