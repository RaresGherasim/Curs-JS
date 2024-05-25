import React, { useState } from 'react';
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';
import { Route, Routes } from 'react-router-dom';



export const DeviceContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [devices, setDevices] = useState([]);
  const [auth, setAuth] = useState(accessToken);
  return (
    <>
    <DeviceContext.Provider value={{ devices, setDevices }}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Navbar />

        {/* Switch statement */}
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
    </DeviceContext.Provider>
  </>
  );
}

export default App;
