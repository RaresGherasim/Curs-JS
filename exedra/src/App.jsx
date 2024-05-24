import React from 'react';
import { GoogleMap, LoadScript, OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 40.748817, // replace with your desired latitude
  lng: -73.985428 // replace with your desired longitude
};

const squareStyle = {
  position: 'absolute',
  width: '10px',
  height: '10px',
  backgroundColor: 'red',
  transform: 'translate(-50%, -50%)'
};

function App() {
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
      </GoogleMap>
    </LoadScript>
  );
}

export default App;
