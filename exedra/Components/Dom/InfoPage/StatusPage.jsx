import { useState } from "react";
import DevicesList from "./DevicesButtonList"
import OptionButtons from "./OptionButtons";
import DeviceMetering from "./DeviceMetering";


function StatusPage() {
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
          Status Page
          <br />
          <br />
          <DeviceMetering deviceId={selectedDeviceId} />
        </div>
    </div>
    )
}

export default StatusPage