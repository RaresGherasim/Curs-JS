import React, { useState, useEffect } from 'react';
import './PhotoList.css'; // Import your CSS file for styling

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="photo-list">
      {isLoading && <p>Loading photos...</p>}
      {error && <p className="error">Error: {error}</p>}
      {photos.length > 0 && (
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <a href={photo.url} target="_blank" rel="noreferrer noopener">
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </a>
              <span>{photo.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhotoList;