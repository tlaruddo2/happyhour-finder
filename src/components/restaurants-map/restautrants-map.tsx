import styled from "styled-components";
import Map from "./child/map";
import { Coord } from "pages/home";


interface RestaurantMapProps{
    date: string,
    time: string,
    address: string,
    currentCoord: Coord,
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}
const RestaurantsMap = ({ date, time, address, currentCoord, setCurrentCoord}: RestaurantMapProps) => {    
    return (
        <Container>
            <Map date={date}  time={time} address={address} currentCoord={currentCoord} setCurrentCoord={setCurrentCoord}/>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`
export default RestaurantsMap;
