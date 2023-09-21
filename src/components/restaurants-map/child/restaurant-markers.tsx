import { MarkerF, InfoBoxF } from "@react-google-maps/api";
import { restaurantSamples } from "entity/restaurant/restaurant"
import type { Restaurant } from "entity/restaurant/restaurant";
import { useState } from "react";
import styled from "styled-components";

const RestaurantMarkers = () => {
    const [ isOpend, setOpend ] = useState(true); 
    const [ detailed, setDetailed ] = useState("a");
    const [ lat, setLat ] = useState(0);
    const [ lng, setLng ] = useState(0);

    const markerClickHandler = (samples: Restaurant[], n: number, ) => {
        console.log("marker clickcd")
        setOpend(true);
        setDetailed(samples[n].detail);
        setLat(samples[n].lat);
        setLng(samples[n].lng);

    }
    const closeClickHandler = () => {
        console.log("clokse click")
    }

    return (
        <>
            {restaurantSamples.map(( r ) =>
                <MarkerF 
                    onClick={() => markerClickHandler(restaurantSamples, r.id-1)} 
                    position={{ lat: r.lat, lng: r.lng }}
                    icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                    key = {r.id}
                >           
                </MarkerF>
            )}    
            {isOpend &&
                <InfoBoxF position={new google.maps.LatLng(lat, lng)} onCloseClick={closeClickHandler}>
                    <InfoBox>
                        { detailed }
                    </InfoBox>
                </InfoBoxF>
            }            
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