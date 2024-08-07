import { InfoWindowF } from "@react-google-maps/api";
import { RestaurantInfo } from "./restaurant-info";
import { MenuInfo } from "./menu-info";
import styled , { createGlobalStyle } from "styled-components";
import type { Restaurant } from "state/types";
import { useState } from "react";

interface Props {
    selectedRestaurnt: Restaurant
    setSelectedRestaurant : React.Dispatch<React.SetStateAction<Restaurant | null>>
}
export const Marker: React.FC<Props> = ({ selectedRestaurnt, setSelectedRestaurant }) => {
    const infoBoxOptions = {
        disableAutoPan: true,
        boxStyle: {
            border: 'none',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '5px',
        },
    };    
        
    return (
        <>
            <GlobalStyle />
            <InfoWindow 
                position={{lat: selectedRestaurnt.lat, lng: selectedRestaurnt.lng}}
                options={infoBoxOptions}
                onCloseClick={()=> setSelectedRestaurant(null)}
            >
                <Container>
                    <RestaurantInfo restaurant={selectedRestaurnt} />
                </Container>
            </InfoWindow>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    .gm-style-iw-chr {
        height: 20px !important;
    }
    .gm-style-iw-chr > button {
        padding: 0px !important;
        margin: 0px !important;
        width: 1rem !important;
        height: 1rem !important;
    }

    .gm-style-iw-chr > button > span {
        padding: 0px !important;
        margin: 0px !important;
        width: 1rem !important;
        height: 1rem !important;
    }    
`;

const InfoWindow = styled(InfoWindowF)`
`

const Container = styled.div`
    width: 14rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
    position: relative;
`

