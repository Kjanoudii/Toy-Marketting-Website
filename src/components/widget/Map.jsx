'use client'
// import {useState, useCallback, memo} from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "600px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// function Map({ data }) {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: API_KEY,
//   });

//   const {
//     attributes: { location, map_lat, map_long },
//   } = data;

//   const lat = Number(map_lat);
//   const lng = Number(map_long);

//   const mapCenter = {
//     lat: lat,
//     lng: lng,
//   };

//   const [map, setMap] = useState(null);

//   const onLoad = useCallback(function callback(map) {
//     map.setZoom(16);
//     setMap(map);
//   }, []);

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   const markers = [
//     {
//       address: location,
//       lat: lat,
//       lng: lng,
//     },
//   ];

//   const handleMarkerClick = () => {
//     const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
//     window.open(mapUrl, "_blank");
//   };

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={mapCenter}
//       zoom={16}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {markers.map((marker, index) => (
//         <Marker
//           key={index}
//           position={{ lat: marker.lat, lng: marker.lng }}
//           title={marker.address}
//           onClick={handleMarkerClick}
//         />
//       ))}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default memo(Map);


import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Replace 'YOUR_MAPBOX_API_KEY' with your actual Mapbox API key
mapboxgl.accessToken = "AIzaSyBWIij4hS37Fp0VRBPRgp4FkQbI8xkOIHY";

const MapboxMap = () => {
  useEffect(() => {
    // Initialize Mapbox map
    const map = new mapboxgl.Map({
      container: "map-container", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    // Add navigation control (optional)
    map.addControl(new mapboxgl.NavigationControl());

    return () => {
      // Clean up the map instance
      map.remove();
    };
  }, []); // Empty dependency array to run the effect only once

  return <div id="map-container" style={{ width: "100%", height: "400px" }} />;
};

export default MapboxMap;
