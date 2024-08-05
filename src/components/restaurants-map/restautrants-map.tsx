import styled from "styled-components";
import Map from "./child/map";
import { Coord } from "state/types";

interface RestaurantMapProps{
    currentCoord: Coord,
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}
const RestaurantsMap = ({ currentCoord, setCurrentCoord }: RestaurantMapProps) => {    
    return (
        <Container>
            <Map currentCoord={currentCoord} setCurrentCoord={setCurrentCoord}/>
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
