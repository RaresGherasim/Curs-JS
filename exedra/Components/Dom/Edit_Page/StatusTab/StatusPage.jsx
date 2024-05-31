import { useState } from "react";
import DevicesList from "../DevicesButtonList"
import OptionButtons from "../OptionButtons";

import DeviceStatus from "./DeviceStatus";
import EditFooter from "../EditFooter";


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
            <OptionButtons/>
          Status Page
          <br />
          <br />
          <DeviceStatus deviceId={selectedDeviceId} />
        </div>
      </div>
      <EditFooter />
    </div>
    )
}

export default StatusPage