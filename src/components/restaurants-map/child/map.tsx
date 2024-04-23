import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import RestaurantMarkers from "./restaurant-markers";
import CurrentLocationMarker from "./current-location-marker"

interface MapProps{ 
    date: string,
    time: string,
    address: string,    
}
const Map = ({ date, time, address }: MapProps) => { 
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!})

    //todo: make helper function
    const [ currnetLat, setCurrentLat ] = useState(49.28);
    const [ currnetLng, setCurrentLng ] = useState(-123.12);

    navigator.geolocation.getCurrentPosition((position) => {   
        setCurrentLat(position.coords.latitude);
        setCurrentLng(position.coords.longitude);
    },);

    const mapOptions = useMemo(() => ({
        fullscreenControl: false,
        disableDefaultUI: true,
      }), []);


    const center = useMemo(() => ({lat: currnetLat, lng: currnetLng}), [currnetLat, currnetLng]);

    if(!isLoaded) return <div> Loading...</div>

    return (
        <GoogleMap 
            zoom={15} 
            center={center} 
            mapContainerStyle={{width: "100%", height: "100%"}} 
            onClick={() => console.log("map click")}
            options={mapOptions}
        >
            <CurrentLocationMarker lat={currnetLat} lng={currnetLng}/>
            <RestaurantMarkers/>
        </GoogleMap>
    )
}

export default Map; 