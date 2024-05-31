import { useState } from "react";
import OptionButtons from "../OptionButtons";
import DevicesList from "../DevicesButtonList";
import DeviceMetering from "./DeviceMetering";
import Footer from "../Footer";


function MeteringPage() {
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
          <br />
        <br />
      </div>
    </div>
      <Footer />
    </div>
    )
}

export default MeteringPage