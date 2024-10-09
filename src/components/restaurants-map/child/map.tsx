import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import RestaurantMarkers from "./restaurant-markers";
import CurrentLocationMarker from "./current-location-marker"
import SearchBar from "components/search-bar/search-bar";
import type { Coord, Restaurant } from "state/types";


interface MapProps{   
    currentCoord: Coord,
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}

const libraries: ("places")[] = ["places"];

const Map = ({ currentCoord, setCurrentCoord }: MapProps) => { 
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

    const mapStyles = [
        {
            "elementType": "geometry",
            "stylers": [
                { "saturation": -20 },
                { "lightness": 50 }   
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "on" },
                { "saturation": -50 },
                { "lightness": 50 }   
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                { "saturation": -30 },
                { "lightness": 50 }   
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "saturation": -30 }, 
                { "lightness": 10 }    
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                { "saturation": -40 }, 
                { "lightness": 20 }    
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                { "saturation": -20 }, 
                { "lightness": 10 }    
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                { "visibility": "off" }
            ]
        }
    ];    

    const mapOptions = useMemo(() => ({
        fullscreenControl: false,
        disableDefaultUI: true,
        styles: mapStyles
    }), []);

    

    const center = useMemo(() => ({lat: currentCoord.lat , lng: currentCoord.lng}), [currentCoord.lat, currentCoord.lng]);

    // if(!isLoaded) return <div> Loading...</div>

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!} libraries={libraries}>
            <GoogleMap 
                zoom={15} 
                center={center} 
                mapContainerStyle={{width: "100%", height: "100%"}} 
                onClick={() => setSelectedRestaurant(null)}
                options={mapOptions}
            >
                <SearchBar setCurrentCoord={setCurrentCoord}/>
                <CurrentLocationMarker lat={currentCoord.lat} lng={currentCoord.lng}/>
                <RestaurantMarkers setSelectedRestaurant={setSelectedRestaurant} selectedRestaurant={selectedRestaurant}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map; 