import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import PropTypes from 'prop-types';
import getAllSimDevices from "../GetFromDb/GetAllSimDevices";

const libraries = ["places"]; // Required for marker placement


const MapContainerRest = ({ markers }) => {
    const [map, setMap] = useState(null);
    const mapContainerStyle = {
      width: '100vw',
      height: '70vh', 
    };
  
  
    // Handle potential errors during loading (optional)
    useEffect(() => {}, []);
  
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys" // Replace with your API key
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={17} // Adjust zoom level to see all markers
          center={{ lat: 46.275 || 0, lng: 23.064 || 0 }}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
          onLoad={setMap}
        >
          {map && markers}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  MapContainerRest.propTypes = {
    markers: PropTypes.arrayOf(PropTypes.object).isRequired, // Define prop type
  };

  export default MapContainerRest;