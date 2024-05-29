import { useState } from "react";
import DeviceInfo from "./DeviceInfo"
import DevicesList from "./DevicesButtonList"


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
          <DeviceInfo deviceId={selectedDeviceId} />
        </div>
    </div>
    )
}

export default InfoPage