import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo, useState } from "react";
const Map = () => { 
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!})

    const [ currnetLat, setCurrentLat ] = useState(0);
    const [ currnetLng, setCurrentLng ] = useState(0);
    navigator.geolocation.getCurrentPosition((position) => {   
        setCurrentLat(position.coords.latitude);
        setCurrentLng(position.coords.longitude);
    },);

    const center = useMemo(() => ({lat: currnetLat, lng: currnetLng}), [currnetLat, currnetLng]);

    const clickHandler = () => console.log("marker clickcd")

    if(!isLoaded) return <div> Loading...</div>
    return (
        <GoogleMap zoom={15} center={center} mapContainerStyle={{width: "90%", height: "90%"}}>
            <MarkerF onClick={clickHandler} position={{ lat: 35.0465, lng: 128.9635 }} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
            <div>as</div>
        </GoogleMap>
    )
}

export default Map; 