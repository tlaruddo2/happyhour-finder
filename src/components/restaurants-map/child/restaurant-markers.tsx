import type { Restaurant, RestaurantType } from "state/types";
import { MarkerF } from "@react-google-maps/api";
import { Marker } from "./marker";
import { useRestaurantContext } from "state/store";



interface Props {
    selectedRestaurant: Restaurant | null;
    setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
}
const RestaurantMarkers: React.FC<Props> = ({selectedRestaurant, setSelectedRestaurant}) => {
    const restaurants = useRestaurantContext().restaurants; 

    const returnMarkerIcon = (restaurantType: RestaurantType): google.maps.Icon  => {
        let iconUrl = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        if (restaurantType === "Dining")
            iconUrl = "https://cdn-icons-png.freepik.com/512/8280/8280802.png";
        if (restaurantType ===  "Pub")
            iconUrl = "https://cdn-icons-png.freepik.com/512/684/684415.png"; 

        const  icon = {
            url: iconUrl,
            // size: new google.maps.Size(20, 32), 
            // origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32), 
            scaledSize: new google.maps.Size(20, 32), 
        }

        return icon;     
    }  
    
    return (
        <div>
            {restaurants.map(( restaurant ) => {
                return (
                    <div key={restaurant.id}>
                        <MarkerF
                            position={{ lat: restaurant.lat, lng: restaurant.lng }}
                            options={{icon: returnMarkerIcon(restaurant.type)}}
                            onClick={()=>setSelectedRestaurant(restaurant)}                       
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