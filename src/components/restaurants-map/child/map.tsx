import { GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => { 
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!
    })

    const center = useMemo(() => ({lat: 35.0462, lng: 128.9632}), []);

    const clickHandler = () => {
        console.log("marker clickcd")
    }

    if(!isLoaded) return <div> Loading...</div>
    return (
        <GoogleMap zoom={15} center={center} mapContainerStyle={{width: "100%", height: "100%"}}>
            <MarkerF onClick={clickHandler} position={{ lat: 35.0465, lng: 128.9635 }}/>
        </GoogleMap>
    )
}

export default Map; 