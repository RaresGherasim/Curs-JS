import React from 'react';
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '90vw',
  height: '90vh'
};

const center = {
  lat: 47, // replace with your desired latitude
  lng: 26 // replace with your desired longitude
};
const center2 = {
  lat: 47.5, // replace with your desired latitude
  lng: 26.5 // replace with your desired longitude
};

const squareStyle = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: 'red',
  transform: 'translate(-50%, -50%)'
};

function TestMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div style={squareStyle} />
        </OverlayView>
        <OverlayView
          position={center2}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div style={squareStyle} />
        </OverlayView>
      </GoogleMap>
    </LoadScript>
  );
}

export default TestMap;
