import { useState } from "react"
import type { Restaurant } from "state/types"
import styled from "styled-components"
import RestaurantDetails from "./restaurant-details"

interface Props {
    restaurant: Restaurant
}
export const RestaurantInfo: React.FC<Props> = ({ restaurant }) => {
    const [detailsClicked, setDetailsClicked] = useState(false);

    const handleDetailsBtnClick = () => {
        setDetailsClicked(!detailsClicked);
    }

    return (
        <Container>
            {!detailsClicked &&
                <div>
                    <Name>{restaurant.name}</Name>
                    <Description>{restaurant.detailedType}</Description>
                    <BusinessHours>{restaurant.happyhourHour}</BusinessHours>
                    <Buttons>
                        <TextBtn><a href={restaurant.googleMap} target="'_blank'">Map</a></TextBtn>
                        <TextBtn><a href={restaurant.website} target="'_blank'">Website</a></TextBtn>                        
                        <TextBtn onClick={handleDetailsBtnClick}>View Details</TextBtn>
                    </Buttons>
                </div>
            }
            {detailsClicked && 
                <RestaurantDetails setDetailsClicked={setDetailsClicked} restaurant={restaurant}/>
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Name = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0rem;
    width: 100%;
`

const Description = styled.h4`
    font-size: 0.7rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
`
const BusinessHours = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0.2em 0rem;
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 0rem;
`

const TextBtn = styled.div`
    cursor: pointer;
    text-decoration: underline;
    color: blue;

    &:hover{
        font-weight: 700;
        color: blue;
        cursor: pointer;
    }
`