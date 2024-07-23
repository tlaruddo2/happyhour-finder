import { faBeerMugEmpty, faBowlFood, faGlobe, faMap, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InfoWindow, InfoWindowF, MarkerF } from "@react-google-maps/api";
import { restaurantSamples } from "entity/restaurant/restaurant"
import type { Restaurant } from "entity/restaurant/restaurant";
import { useState } from "react";
import styled from "styled-components";
import { Marker } from "./marker";

const RestaurantMarkers = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

    return (
        <div>
            {restaurantSamples.map(( restaurant ) => {
                return (
                    <div key={restaurant.id}>
                        <MarkerF
                            position={{ lat: restaurant.lat, lng: restaurant.lng }}
                            options={{icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}}
                            onClick={()=>setSelectedRestaurant(restaurant)}            
                            onLoad={()=>console.log(restaurant.name, " loaded")}
                        />
                    </div> 
            )})}    
            {selectedRestaurant 
                && <Marker
                        selectedRestaurnt={selectedRestaurant}
                        setSelectedRestaurant={setSelectedRestaurant}
                    />
            }
        </div>
    )
}

export default RestaurantMarkers;