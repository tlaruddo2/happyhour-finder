import { faCompass, faMap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import type { Restaurant } from "state/types"
import styled from "styled-components"
// import { MenuInfo } from "./menu-info"
import RestaurantDetails from "./restaurant-details"

interface Props {
    restaurant: Restaurant
}
export const RestaurantInfo: React.FC<Props> = ({ restaurant }) => {
    const [ detailsClicked, setDetailsClicked] = useState(false);

    const handleDetailsBtnClick = () => {
        setDetailsClicked(!detailsClicked);
        console.log(detailsClicked);
    }

    return (
        <Container>
            {!detailsClicked &&
                <div>
                    <Name>{restaurant.name}</Name>
                    <Description>{restaurant.detailedType}</Description>
                    <BusinessHours>
                        <Days>{restaurant.day}</Days>
                        <Hours>{restaurant.startTime} ~ {restaurant.endTime}</Hours>
                    </BusinessHours>
                    <Buttons>
                        <div style={{display: "flex", width: "20%", justifyContent: "space-between"}}>
                            <a href={restaurant.googleMap} target="'_blank'" style={{height: '35%', width: '35%'}}>
                                <FontAwesomeIcon 
                                    style={{paddingRight: '0.3rem', width: '100%', height: '100%'}}
                                    icon={faMap} />
                            </a>
                            <a href={restaurant.website} target="'_blank'" style={{height: '35%', width: '35%'}}>
                                <FontAwesomeIcon style={{paddingRight: '0.3rem', width: '100%', height: '100%',}}icon={faCompass} />
                            </a> 
                        </div>                    
                        <DetailsBtn onClick={handleDetailsBtnClick}>View Details</DetailsBtn>
                    </Buttons>
                </div>
            }
            {/* { detailsClicked && <MenuInfo restaurant={restaurant}/>} */}
            { detailsClicked && 
                <RestaurantDetails setDetailsClicked={setDetailsClicked} restaurant={restaurant}/>
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Name = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0rem;
    width: 100%
`

const Description = styled.h4`
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
`
const BusinessHours = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0.2em 0rem;
`

const Days = styled.div`
    font-size: 0.8rem;
`

const Hours = styled.div`
    font-size: 0.8rem;
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 0rem;
`

const DetailsBtn = styled.div`
    text-decoration: underline;
    color: blue;

    &:hover{
        font-weight: 700;
        color: blue;
        cursor: pointer;
    }
`