import { useState } from "react";
import OptionButtons from "../OptionButtons";
import DevicesList from "../DevicesButtonList";
import DeviceMetering from "./DeviceMetering";
import EditFooter from "../EditFooter";


function EditMeteringPage() {
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
          Metering Page
          <br />
          <br />
          <DeviceMetering deviceId={selectedDeviceId} />
        </div>
      </div>
      <EditFooter />
    </div>
    )
}

export default EditMeteringPage