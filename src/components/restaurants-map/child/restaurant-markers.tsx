import { MarkerF } from "@react-google-maps/api";
// import { useState } from "react";
import { Marker } from "./marker";
import { useRestaurantContext } from "state/store";
import type { Restaurant } from "state/types";


interface Props {
    selectedRestaurant: Restaurant | null;
    setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
}
const RestaurantMarkers: React.FC<Props> = ({selectedRestaurant, setSelectedRestaurant}) => {
    const restaurants = useRestaurantContext().restaurants; 
    
    return (
        <div>
            {restaurants.map(( restaurant ) => {
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