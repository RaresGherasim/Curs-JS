import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,

  OverlayView,
} from "@react-google-maps/api";
// import getAllSimDevices from "../GetFromDb/GetAllSimDevices";
import PropTypes from 'prop-types';

const libraries = ["places"]; // Required for marker placement

const MapContainer = ({ lat, lng }) => {
  const [map, setMap] = useState(null);
  const mapContainerStyle = {
    width: "100vw",
    height: "60vh", // Adjust height as needed
  };

  const center = {
    lat,
    lng,
  };
 console.log(lat, lng);
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const onLoad = (mapInstance) => setMap(mapInstance);



//   const [allDevices, setDevice] = useState([]);

//   useEffect(() => {
//     getAllSimDevices().then((dev) => setDevice(dev));
//   }, []);

  const squareStyleGood = {
    position: "absolute",
    width: "30px",
    height: "30px",
    backgroundColor: "green",
    transform: "translate(-50%, -50%)",
  };
//   const squareStyleOthers = {
//     position: "absolute",
//     width: "20px",
//     height: "20px",
//     backgroundColor: "blue",
//     transform: "translate(-50%, -50%)",
//   };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys" // Replace with your API key
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17} // Adjust zoom level as needed
        center={center}
        options={options}
        onLoad={setMap}
      >
        {/* {map && (
          <Marker position={center}>
            <div className="marker-custom" style={{ width: '20px', height: '20px', backgroundColor: 'green' }} />
          </Marker>
        )} */}
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div style={squareStyleGood} />
        </OverlayView>

        {/* { allSimDevices.map((deviceAtt) => (
                
                <OverlayView key={deviceAtt.id}
                position={ {lat: deviceAtt?.controllerCoords.coordinates[0], lon: deviceAtt?.controllerCoords.coordinates[1]}}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div style={squareStyleOthers} />
              </OverlayView>
            )) } */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

MapContainer.propTypes = {
    allSimDevices: PropTypes.arrayOf(PropTypes.object),
  };