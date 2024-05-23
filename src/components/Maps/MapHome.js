import React from 'react';
import Map, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';

const MapHome = () => {
  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
      }}
    >
      <div>
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          initialViewState={{
            pitch: 45,
            width: 400,
            height: 400,
            attributionControl: false,
            longitude: -70.65023802887474, 
            latitude: -33.42312703367724,
            zoom: 12,
            style: {
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            },
          }}
          mapStyle={'mapbox://styles/mapbox/streets-v12'}
          style={{
            width: 'auto',
            height: '400px',
            borderRadius: '15px',
          }}
        >
          <Marker longitude={-70.65023802887474 } latitude={-33.42312703367724} />
          <NavigationControl />
          <GeolocateControl />
        </Map>
      </div>
    </div>
  );
};

export default MapHome;
