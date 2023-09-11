import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./child/google-map";

const RestaurantsMap = () => {    
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 8
    
    return (
        <div>
            <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY!}>
                <GoogleMap center={center} zoom={zoom}/>
            </Wrapper>
        </div>
    )
}

export default RestaurantsMap;
