import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
    });

    const overlay = new window.google.maps.OverlayView();

    overlay.onAdd = function () {
      const div = document.createElement('div');
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '10px';
      div.style.borderColor = '#FF0000';
      this.div_ = div;
      const panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
    };

    overlay.draw = function () {
      const overlayProjection = this.getProjection();
      const position = overlayProjection.fromLatLngToDivPixel(new window.google.maps.LatLng(-34.397, 150.644));
      const div = this.div_;
      div.style.left = position.x + 'px';
      div.style.top = position.y + 'px';
    };

    overlay.setMap(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
}


export default Map;
