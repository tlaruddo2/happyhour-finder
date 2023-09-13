import styled from "styled-components";
import Map from "./child/map";

const RestaurantsMap = () => {    
    return (
        <Container>
            {/* no call map api when develop */}
            <Map/>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default RestaurantsMap;
