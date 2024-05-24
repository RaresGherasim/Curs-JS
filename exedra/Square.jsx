import React from 'react';

const Square = ({ position, color }) => {
  const markerSize = new google.maps.Size(10, 10); // Size of the square marker
  const markerAnchor = new google.maps.Point(markerSize.width / 2, markerSize.height / 2); // Anchor point for centering

  const markerOptions = {
    position,
    map: null, // Initially set map to null
    icon: {
      url: 'https://maps.gstatic.com/mapfiles/transparent.png', // Transparent background
      size: markerSize,
      anchor: markerAnchor,
    },
  };

  // Use React's useEffect hook to set the map reference when available
  useEffect(() => {
    if (window.google && window.google.maps) { // Check for Google Maps API availability
      const map = window.google.maps.event.addDomListener(
        window,
        'load',
        () => {
          markerOptions.map = map;
          const marker = new google.maps.Marker(markerOptions);
        }
      );
      return () => window.google.maps.event.removeListener(map); // Cleanup on unmount
    }
  }, []);

  return null; // No visual representation of the square in the component itself
};

export default Square;
