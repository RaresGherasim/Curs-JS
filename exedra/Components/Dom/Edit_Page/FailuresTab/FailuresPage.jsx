import { useState } from "react";
import DevicesList from "../DevicesButtonList"
import OptionButtons from "../OptionButtons";
import DeviceFailures from "./DeviceFailures";


function FailuresPage() {
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
            <OptionButtons/>
          Failures Page
          <br />
          <br />
          <DeviceFailures deviceId={selectedDeviceId} />
        </div>
    </div>
    )
}

export default FailuresPage