import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [72.8813701, 18.6561523],
      zoom: 12.5,
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([72.8813701, 18.6561523])
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef}></div>;
}
