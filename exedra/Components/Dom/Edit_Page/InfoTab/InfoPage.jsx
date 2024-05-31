import { useState } from "react";
import DeviceInfo from "./DeviceInfo";
import EditOptionButtons from "../OptionButtons";
import EditDevicesList from "../DevicesButtonList";
import EditFooter from "../EditFooter";

function EditInfoPage() {
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
        Informations Page
        <br />
        <br />
        <DeviceInfo deviceId={selectedDeviceId} />
      </div>
    </div>
    <EditFooter/>
    </div>
  );
}

export default EditInfoPage;
