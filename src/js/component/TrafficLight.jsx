import React, { useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  
  return (
    <div className="traffic-light">
      <div className="container">
        <div className="light-section">
          <div 
            onClick={() => setColor("red")}
            className={`light red ${color === "red" ? "glow" : ""}`}
          />
          <div 
            onClick={() => setColor("yellow")}
            className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          />
          <div 
            onClick={() => setColor("green")}
            className={`light green ${color === "green" ? "glow" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;