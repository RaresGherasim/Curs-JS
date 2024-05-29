import React, { useState } from "react";
import PropTypes from "prop-types";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Components/Dom/LoginPage/Header";
import LogInComp from "../Components/Dom/LoginPage/LoginCom";
import DevicesList from "../Components/Dom/InfoPage/DevicesButtonList";
import DeviceInfo from "../Components/Dom/InfoPage/DeviceInfo";
import { devicesList } from "../Components/Dom/DeviceDB";
import InfoPage from "../Components/Dom/InfoPage/InfoPage";

export const DeviceContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [devices, setDevices] = useState([]);
  const [auth, setAuth] = useState(accessToken);
  let [className, setClassName] = useState("green");

  // const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  // const handleDeviceClick = (deviceId) => {
  //   setSelectedDeviceId(deviceId);
  // };

  function setColor(color) {
    setClassName(color);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="hello" element={<h1>Hello World</h1>}></Route>
          <Route path="search" element={<h1>Search</h1>}></Route>
          <Route path="info" element={<InfoPage />}></Route>
        </Routes>
      </BrowserRouter>

      
      {/* <Header />
      <LogInComp/> */}


      <h1>
        <p className={className}>Hello</p>
      </h1>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
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
