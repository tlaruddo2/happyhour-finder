import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import RestaurantMarkers from "./restaurant-markers";
import CurrentLocationMarker from "./current-location-marker"
import SearchBar from "components/search-bar/search-bar";
import type { Coord } from "state/types";


interface MapProps{   
    currentCoord: Coord,
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}

const libraries: ("places")[] = ["places"];

const Map = ({ currentCoord, setCurrentCoord }: MapProps) => { 
    // const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!})

    const mapOptions = useMemo(() => ({
        fullscreenControl: false,
        disableDefaultUI: true,
    }), []);

    

    const center = useMemo(() => ({lat: currentCoord.lat , lng: currentCoord.lng}), [currentCoord.lat, currentCoord.lng]);

    // if(!isLoaded) return <div> Loading...</div>

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!} libraries={libraries}>
            <GoogleMap 
                zoom={15} 
                center={center} 
                mapContainerStyle={{width: "100%", height: "100%"}} 
                onClick={() => console.log("map click")}
                options={mapOptions}
            >
                <SearchBar setCurrentCoord={setCurrentCoord}/>
                <CurrentLocationMarker lat={currentCoord.lat} lng={currentCoord.lng}/>
                <RestaurantMarkers/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map; 