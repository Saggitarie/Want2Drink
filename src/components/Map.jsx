import React, {useState} from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";

// import mapStyles from "./mapStyles";

function MyMap(props){
  const [selectedBar, setSelectedBar] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 35.6804, lng: 139.7690}}
      // defaultOptions={{styles: mapStyles}}
    >
      {props.locations.map((location, index) => (
        // console.log("latitude" + location.latitude, "longitude"+ location.longitude)
        <Marker key={index}
        position={{
          lat:location.latitude,
          lng:location.longitude
        }}
        onClick={() => {
          setSelectedBar(location)
        }}
        icon={{
          url: "/drunk.svg",
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        />
      ))}

      {selectedBar && (
        <InfoWindow
          position={{
            lat:selectedBar.latitude,
            lng:selectedBar.longitude
          }}
          onCloseClick={() => {
            setSelectedBar(null);
          }}
        >
          <div>
            <h2>{selectedBar.drinking_place_name}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(MyMap));

export default function Map({locationInfo}){
  return (
  <div style={{width: `100vw`, height: `100vh`}}>
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
      loadingElement={<div style={{height: `100%`}}></div>}
      containerElement={<div style={{height: `100%`}}></div>}
      mapElement={<div style={{height: `100%`}}></div>}
      locations={locationInfo}
    />
  </div>)
}