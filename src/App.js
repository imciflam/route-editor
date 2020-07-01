import React from 'react';
import Map from "./components/Map"
import Markers from "./components/Markers"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Map />
        <Markers />
      </div>
    );
  }
}

export default App;
