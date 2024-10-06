import { faLocation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeColor } from "const/const"
import { Coord } from "state/types"
import styled from "styled-components"

interface Props{
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}
export const CurrentLocationIcon = ({ setCurrentCoord }: Props) => {

    const changeCoord = () => {
        navigator.geolocation.getCurrentPosition((position) => {   
            setCurrentCoord({lat: position.coords.latitude, lng: position.coords.longitude});
        });        
    }

    return (
        <Container onClick={() => changeCoord()}>
            <FontAwesomeIcon icon={faLocation} style={{color: ThemeColor.main, width: "65%", height: "65%"}}/>
        </Container>  
    )
}


const Container = styled.div`
    position: fixed;
    right: 2%;
    bottom: 2%;
    height: 5%;
    width: 5%;
    background-color: white;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    
    &:hover {
        cursor: pointer
    }
`

