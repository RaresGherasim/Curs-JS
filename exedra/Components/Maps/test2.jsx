import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

class MyObject {
  constructor(id, name, latitude, longitude) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

const objectsArray = [
  new MyObject('1', 'Object 1', 51.5074, -0.1278),
  new MyObject('2', 'Object 2', 48.8566, 2.3522),
  // Add more objects as needed
];

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 0 0' }}>
        {/* Insert your left side menu here */}
      </div>
      <div style={{ flex: '3 0 0' }}>
        <LoadScript googleMapsApiKey="AIzaSyD6rYPz4-h51wtsvT91o0i1zUftpZvM-ys">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            {objectsArray.map((object) => (
              <Marker
                key={object.id}
                position={{ lat: object.latitude, lng: object.longitude }}
                title={object.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default React.memo(MyComponent);