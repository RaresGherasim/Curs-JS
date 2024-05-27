import React, { useState } from "react";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
      <header>
        <div className="header">
          <div className="headerBody">
            <a className="logoSchreder">
              <img
                className="imageLogo"
                src="https://hyperion.schreder-exedra.com/login/assets/logo.svg"
                alt="Home"
              />
            </a>
            <div className="spaceLogo"></div>
          </div>
        </div>
        <div className="separator">s</div>
      </header>
      <section className="mainLogo">
        <br /><br />
        <div className="loginBox">
          <div className="signInLogo">
            <a className="signInPic" href="/">
              <img
                src="https://ro-ab-abrud.schreder-exedra.com/login/assets/exedra-small.png"
                alt="Exedra"
              />
            </a>
          </div>
          <div>Easy Mode</div>
        </div>


        <div className="signInSpace">
          <div className="signInTitle"> 
            Sign In
          </div>
          <div className="signInEmail">
            <input id="email"
                 name="email" type="email"
                 required="" 
                 className="signInEmailField" 
                 placeholder="Email address"
                 data-placeholder="Email address"
                 aria-required="true"/>
          </div> 
          <div className="signInTitle"> 
           
          </div>
          <div className="signInEmail">
            <input id="email"
                 name="email" type="email"
                 required="" 
                 className="signInEmailField" 
                 placeholder="Password"
                 data-placeholder="Password"
                 aria-required="true"/>
          </div> 
          <br />
          <div className="signInButtonZone">
          <button type="submit" 
              color="accent" 
              className="signInButton" ><span class="mat-button-wrapper"> Sign in </span><span matripple="" class="mat-ripple mat-button-ripple"></span><span class="mat-button-focus-overlay"></span></button>
          </div> 
          <br /><br />
          <div className="signInFooter">
            <div>For SCHREDER SA</div>
            <div>by Gherasim Rares</div>
          </div>
        </div>
        <br /><br />
        <div className="separator">s</div>

        <h1>
          <p className={className}>Hello</p>
        </h1>
        <h2>
          <p>test2</p>
          <p>test 3</p>
        </h2>

        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </section>
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
