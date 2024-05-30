import { useState } from "react";
import OptionButtons from "../OptionButtons";
import DevicesList from "../DevicesButtonList";
import DeviceMetering from "./DeviceMetering";


function MeteringPage() {
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
          Metering Page
          <br />
          <br />
          <DeviceMetering deviceId={selectedDeviceId} />
        </div>
    </div>
    )
}

export default MeteringPage