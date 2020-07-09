import React, {useState, useEffect} from 'react';
import Map from './Components/Map'
import MapDashboard from './Components/Dashboard'
import './App.css';

function App() {
  const [points, setPoints] = useState();

  const handlePoints = (lon, lat) => {
    const p = {"location": [lon, lat]}
    setPoints(p)
  };

  return (
    <div className="App">
      <div className="map-wrapper">
        <MapDashboard handlePoints={handlePoints}/>
        <Map points={points}/>
      </div>
    </div>
  );
}

export default App;
