import { useState } from "react";
import EditDevicesList from "../DevicesButtonList";
import EditOptionButtons from "../OptionButtons";
import EditDeviceConfiguration from "./DeviceConfiguration";
import EditFooter from "../EditFooter";

function EditConfigurationPage() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  const handleDeviceClick = (deviceId) => {
    setSelectedDeviceId(deviceId);
  };

  return (
    <div>

    <div className="infoPage">
      <div className="deviceListZone">
        <EditDevicesList handleClick={handleDeviceClick} />
      </div>
      <div className="deviceInfoZone">
        <EditOptionButtons deviceId={selectedDeviceId} />
        Configuration Page
        <br />
        <br />
        <EditDeviceConfiguration deviceId={selectedDeviceId} />
      </div>
    </div>
    <EditFooter/>
    </div>
  );
}

export default EditConfigurationPage;
