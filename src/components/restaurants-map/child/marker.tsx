import { faBeerMugEmpty, faBowlFood, faGlobe, faMap, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import { Restaurant } from "entity/restaurant/restaurant";
import { RestaurantInfo } from "./restaurant-info";
import { MenuInfo } from "./menu-info";
import styled , { createGlobalStyle } from "styled-components";

interface Props {
    selectedRestaurnt: Restaurant
    setSelectedRestaurant : React.Dispatch<React.SetStateAction<Restaurant | null>>
}
export const Marker: React.FC<Props> = ({ selectedRestaurnt, setSelectedRestaurant }) => {

    const infoBoxOptions = {
        disableAutoPan: true,
        boxStyle: {
            border: 'none',
            padding: '20px',
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
                // onCloseClick={()=> setSelectedRestaurant(null)}
            >
                <Container>
                    {/* <CloseBtn onClick={() => setSelectedRestaurant(null)}>x</CloseBtn> */}
                    <RestaurantInfo restaurant={selectedRestaurnt}/>
                    <MenuInfo restaurant={selectedRestaurnt}/>
                </Container>
            </InfoWindow>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    .gm-style-iw > div > button {
        padding: 0px !important;
        margin: 0px !important;
        width: 10px !important;
        height: 10px !important;
    }
`;

const InfoWindow = styled(InfoWindowF)`
    /* .gm-style-iw > div > button {
        padding: 0px !important;
        margin: 100px !important;
        width: 10px !important;
        height: 10px !important;

    } */
`

const Container = styled.div`
    width: 12rem;
    height: 6rem;
    display: flex;
    position: relative;
`

const CloseBtn = styled.div`
    position: absolute;
    top: 10px; 
    right: 10px;
    
`