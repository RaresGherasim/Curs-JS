import { useState } from "react";
import DevicesList from "../DevicesButtonList"
import OptionButtons from "../OptionButtons";
import DeviceFailures from "./DeviceFailures";
import Footer from "../Footer";


function FailuresPage() {
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
            <OptionButtons/>
          Failures Page
          <br />
          <br />
          <DeviceFailures deviceId={selectedDeviceId} />
          <br />
        <br />
      </div>
    </div>
      <Footer />
    </div>
    )
}

export default FailuresPage