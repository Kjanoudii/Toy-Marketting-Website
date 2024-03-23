import { memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map() {
  const center = {
    lat: 33.88225, // Update with latitude
    lng: 35.4837778, // Update with longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBhkc7r4k7Im9Di2Efqzzg_B-jlVbvqP_0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);
