import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW51cmFnZ2hhcmF0IiwiYSI6ImNrbHA4c214ZTEwcWcybm4zaTlieHF2MWQifQ.a44TGTFcOoawtGce-pm4OA";

export default function Map({ lat, lon }) {
  const mapContainerRef = useRef(null);
  console.log(lat, lon);
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lon, lat],
      zoom: 12.5,
    });
    var marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef}></div>;
}
