import { MarkerF, InfoBoxF } from "@react-google-maps/api";
import { restaurantSamples } from "entity/restaurant/restaurant"
import type { Restaurant } from "entity/restaurant/restaurant";
import { checkInTimeRange } from "functions";
import { useState } from "react";
import styled from "styled-components";

interface RestaurantMarkersProps{
    isOpend: boolean,
    setOpend:  React.Dispatch<React.SetStateAction<boolean>>
    date: string,
    time: string,
    address: string,
}

const RestaurantMarkers = ({ isOpend, setOpend, date, time, address }: RestaurantMarkersProps) => {
    // const [ isOpend, setOpend ] = useState(true); 
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
        setOpend(true);
        console.log("clokse click")
    }

    const filteredSamples: Restaurant[] = restaurantSamples.filter((restaurant) => 
    restaurant.address.includes(address) && checkInTimeRange(restaurant.startTime, restaurant.endTime, time) && restaurant.day.includes(date)
    );

    return (
        <>
            {filteredSamples.map(( r ) => {
                return (
                    <MarkerF 
                    onClick={() => markerClickHandler(filteredSamples, r.id-1)} 
                    position={{ lat: r.lat, lng: r.lng }}
                    icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                    key = {r.id}/>                               
            )})}    
            {isOpend &&
                <InfoBoxF 
                    position={new google.maps.LatLng(lat, lng)} 
                >
                    <InfoBox>
                        <CloseButton onClick={closeClickHandler}>close</CloseButton>
                        { detailed }
                    </InfoBox>
                </InfoBoxF>
            }            
        </>
    )
}

const InfoBox = styled.div`
    width: 100px; 
    height: 100px;
    background-color: #ffffff;
    border: 1px solid black;
    padding: 2px;
    display: flex; 
    flex-direction: column;
`

const CloseButton = styled.button`
    
`

export default RestaurantMarkers;