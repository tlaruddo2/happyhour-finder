import { MarkerF } from "@react-google-maps/api";
import { restaurantSamples } from "entity/restaurant/restaurant"

const RestaurantMarkers = () => {
    const clickHandler = () => console.log("marker clickcd")
    return (
        <>
            {restaurantSamples.map(( r ) =>
                <MarkerF 
                    key={r.id}
                    onClick={clickHandler} 
                    position={{ lat: r.lat, lng: r.lng }}
                    icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                />
            )}    
        </>
    )
}

export default RestaurantMarkers;