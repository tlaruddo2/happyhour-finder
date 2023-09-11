import { useRef, useEffect } from "react";

interface GoogleMapProps{
    center: google.maps.LatLngLiteral; 
    zoom: number;
}
const GoogleMap = ({ center, zoom }: GoogleMapProps) => { 
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const a = new window.google.maps.Map(ref.current!, {center,zoom,});
    });

    return (
        <div ref={ref} id="map" />
    ) 
}

export default GoogleMap;