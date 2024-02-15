import styled from "styled-components";
import Map from "./child/map";

interface RestaurantMapProps{
    date: string,
    time: string,
    address: string,
}
const RestaurantsMap = ({ date, time, address }: RestaurantMapProps) => {    
    return (
        <Container>
            {/* no call map api when develop */}
            <Map date={date}  time={time} address={address}/>
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
