import { useState } from "react";
import DevicesList from "./DevicesButtonList"
import OptionButtons from "./OptionButtons";
import DeviceMetering from "./DeviceMetering";


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
          <DeviceMetering deviceId={selectedDeviceId} />
        </div>
    </div>
    )
}

export default FailuresPage