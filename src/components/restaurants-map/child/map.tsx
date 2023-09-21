import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import RestaurantMarkers from "./restaurant-markers";
import CurrentLocationMarker from "./current-location-marker"

const Map = () => { 
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!})

    //todo: make helper function
    const [ currnetLat, setCurrentLat ] = useState(0);
    const [ currnetLng, setCurrentLng ] = useState(0);
    const [ isOpend, setOpend ] = useState(true);  //infomap
    navigator.geolocation.getCurrentPosition((position) => {   
        setCurrentLat(position.coords.latitude);
        setCurrentLng(position.coords.longitude);
    },);

    const center = useMemo(() => ({lat: currnetLat, lng: currnetLng}), [currnetLat, currnetLng]);

    if(!isLoaded) return <div> Loading...</div>
    
    return (
        <GoogleMap zoom={15} center={center} mapContainerStyle={{width: "90%", height: "90%"}} onClick={() => setOpend(false)}>
            <CurrentLocationMarker lat={currnetLat} lng={currnetLng}/>
            <RestaurantMarkers isOpend={isOpend} setOpend={setOpend}/>
        </GoogleMap>
    )
}

export default Map; 