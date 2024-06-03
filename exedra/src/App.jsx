import React, { useState } from "react";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "../Components/Dom/InfoPage/InfoTab/InfoPage";
import LoginPage from "../Components/Dom/LoginPage/LoginPage";
import MeteringPage from "../Components/Dom/InfoPage/MeteringTab/MeteringPage";
import FailuresPage from "../Components/Dom/InfoPage/FailuresTab/FailuresPage";
import StatusPage from "../Components/Dom/InfoPage/StatusTab/StatusPage";
import ConfigurationPage from "../Components/Dom/InfoPage/ConfigurationTab/ConfigurationPage";
import EditInfoPage from "../Components/Dom/Edit_Page/InfoTab/InfoPage";
import EditConfigurationPage from "../Components/Dom/Edit_Page/ConfigurationTab/ConfigurationPage";
import EditFailuresPage from "../Components/Dom/Edit_Page/FailuresTab/FailuresPage";
import EditMeteringPage from "../Components/Dom/Edit_Page/MeteringTab/MeteringPage";
import Header from "../Components/Dom/LoginPage/Header";
// import Footer from "../Components/Dom/InfoPage/Footer";
import NewDevicePage from "../Components/Dom/NewDevicePage/NewDevicePage";
// import NewDeviceButtons from "../Components/Dom/NewDevicePage/NewDeviceButtons";
// import NewDeviceInterface from "../Components/Dom/NewDevicePage/NewDeviceInterface";
import DeleteDevicePage from "../Components/Dom/DeleteDevicePage/DeleteDevicePage";
import FirstPage from "../Components/Dom/FirstPage/FirstPage";

export const DeviceContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const accessToken = localStorage.getItem("accessToken");
  // const [devices, setDevices] = useState([]);
  const [auth, setAuth] = useState(accessToken);


  // const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  // const handleDeviceClick = (deviceId) => {
  //   setSelectedDeviceId(deviceId);
  // };

  return (
    <>
      <div className="mainPage">
      <AuthContext.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/view/info/:idFromPath" element={<InfoPage />}></Route>
            <Route
              path="/view/metering/:idFromPath"
              element={<MeteringPage />}
            ></Route>
            <Route
              path="/view/failures/:idFromPath"
              element={<FailuresPage />}
            ></Route>
            <Route
              path="/view/status/:idFromPath"
              element={<StatusPage />}
            ></Route>
            <Route
              path="/view/configuration/:idFromPath"
              element={<ConfigurationPage />}
            ></Route>

            <Route
              path="/edit/info/:idFromPath"
              element={<EditInfoPage />}
            ></Route>
            <Route
              path="/edit/metering/:idFromPath"
              element={<EditMeteringPage />}
            ></Route>
            <Route
              path="/edit/failures/:idFromPath"
              element={<EditFailuresPage />}
            ></Route>
            <Route
              path="/edit/status/:idFromPath"
              element={<StatusPage />}
            ></Route>
            <Route
              path="/edit/configuration/:idFromPath"
              element={<EditConfigurationPage />}
            ></Route>
            <Route 
              path="/new/*"
              element={<NewDevicePage />}
            ></Route>
            <Route 
              path="/delete/info/:idFromPath"
              element={<DeleteDevicePage />}
            ></Route>
            <Route 
              path="/logout"
              element={<NewDevicePage />}
            ></Route>
            <Route 
              path="/firstPage/"
              element={<FirstPage />}
            ></Route>
            <Route 
              path="/"
              element={<LoginPage />}
            ></Route>
            <Route 
              path="view/info/undefined"
              element={<FirstPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
      </div>

      {/* 
      <DeviceContext.Provider value={{ devices, setDevices }}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:idFromPath" element={<MovieDetails />}></Route>
          <Route path="/create-movie" element={<CreateMovie />}></Route>
          <Route
            path="/edit-movie/:idFromPath"
            element={<CreateMovie />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthContext.Provider>
    </DeviceContext.Provider> */}
    </>
  );
}

export default App;
