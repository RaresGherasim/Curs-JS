import React, { useState } from "react";
// import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Components/Dom/LoginPage/Header";
import LogInComp from "../Components/Dom/LoginPage/LoginCom";
import DevicesList from "../Components/Dom/InfoPage/DevicesButtonList";
import DeviceInfo from "../Components/Dom/InfoPage/DeviceInfo";

export const DeviceContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [devices, setDevices] = useState([]);
  const [auth, setAuth] = useState(accessToken);
  let [className, setClassName] = useState("green");

  function setColor(color) {
    setClassName(color);
  }

  return (
    <>
      {/* <Header />
      <LogInComp/> */}
      <DevicesList/>
      <DeviceInfo/>

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
