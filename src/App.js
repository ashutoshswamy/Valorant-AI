// App.js
import React, { useState } from "react";
import Home from "./Home";
import MapDetail from "./MapDetail";
import "./styles/styles.css";

function App() {
  const [selectedMap, setSelectedMap] = useState(null);

  const handleSelectMap = (map) => {
    setSelectedMap(map);
  };

  const handleBack = () => {
    setSelectedMap(null);
  };

  return (
    <div>
      {!selectedMap ? (
        <Home onSelectMap={handleSelectMap} />
      ) : (
        <MapDetail map={selectedMap} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
