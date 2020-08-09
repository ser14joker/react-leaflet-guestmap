import React, { useState } from "react";

import "./App.css";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [zoom, setZoom] = useState(13);
  const [position, setPosition] = useState([lat, lng]);

  return (
    <Map className="map" center={[lat, lng]} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

export default App;
