import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 51.107883, lng: 17.038538 }}
        >
            <Marker
                position={{ lat: 51.107883, lng: 17.038538 }}
            />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMaps() {
    return (
      <div style={{width: '100%', height: '100%'}}>
          <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBx3N7I6HAZGH3hWkR-sXb24ln5PsVZl_c&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%'}} /> }
              containerElement={<div style={{ height: '250px'}} /> }
              mapElement={<div style={{ height: '100%' }} /> }
          />
      </div>
    );
}