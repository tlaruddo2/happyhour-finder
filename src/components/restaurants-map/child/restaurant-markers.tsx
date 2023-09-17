import { MarkerF, InfoBoxF } from "@react-google-maps/api";
import { restaurantSamples } from "entity/restaurant/restaurant"
import { useState } from "react";
import styled from "styled-components";

const RestaurantMarkers = () => {
    const [ isOpend, setOpend ] = useState(false); 
    const markerClickHandler = () => {
        console.log("marker clickcd")
        setOpend(true);
    }
    const closeClickHandler = () => {
        console.log("clokse click")
    }
    return (
        <>
            {restaurantSamples.map(( r ) =>
                <div key={r.id}>
                    <MarkerF 
                        onClick={markerClickHandler} 
                        position={{ lat: r.lat, lng: r.lng }}
                        icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                    >
                    </MarkerF>
                    {isOpend &&
                        <InfoBoxF position={new google.maps.LatLng(r.lat, r.lng)} onCloseClick={closeClickHandler}>
                            <InfoBox>
                                {r.detail}
                            </InfoBox>
                        </InfoBoxF>
                    }
                </div>
            )}    
        </>
    )
}

const InfoBox = styled.div`
    width: 200px; 
    height: 200px;
    background-color: yellow;
    padding: 2px;
`

export default RestaurantMarkers;