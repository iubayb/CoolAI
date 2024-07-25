import React from 'react';

const LatestData = ({ data }) => (
  <div>
    <p>Average Temperature: {data.averageTemp.toFixed(1)}°C</p>
    <p>Average Humidity: {data.averageHumidity.toFixed(1)}%</p>
    <p>Occupied: {data.isOccupied ? 'Yes' : 'No'}</p>
    <p>Optimized Temperature: {data.optimizedTemp.toFixed(1)}°C</p>
    <p>Timestamp: {new Date(data.timestamp).toLocaleString()}</p>
  </div>
);

export default LatestData;
