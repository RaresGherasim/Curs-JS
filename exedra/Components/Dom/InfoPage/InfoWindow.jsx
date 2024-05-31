import PropTypes from "prop-types";
import { useState, useRef } from 'react';

function InfoWindowSpan({ spanText, infoText }) {
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);
  const spanRef = useRef(null); // Optional, for advanced positioning

  const handleMouseOver = () => {
    setIsInfoWindowVisible(true);
  };

  const handleMouseOut = () => {
    setIsInfoWindowVisible(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <span ref={spanRef}> {spanText} </span>
      {isInfoWindowVisible && (
        <div className="info-window"> {infoText} </div>
      )}
    </div>
  );
}

export default InfoWindowSpan;

InfoWindowSpan.propTypes = {
    spanText: PropTypes.text,
    infoText: PropTypes.text
    
  };