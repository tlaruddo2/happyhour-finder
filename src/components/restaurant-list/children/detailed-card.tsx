import { Restaurant } from "entity/restaurant/restaurant"
import { Container } from "./styled/detailed-card.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

interface Props{
    clickHandler: () => void
    restaurant: Restaurant
    currentTop: number
    isClicked: boolean
}
export const DetailedCard: React.FC<Props> = ({ clickHandler, restaurant, currentTop, isClicked }) => {
    // console.log(restaurant);
    
    return ( 
        <Container currentTop={currentTop} isClicked={isClicked}>
            <BackBtn onClick={clickHandler}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </BackBtn>
            <div>{restaurant.name}</div>
        </Container>
    )
}

const BackBtn = styled.div`
    width: 4rem; 
    border: none; 
    font-size: 0.8rem;
    border-radius: 15px;
    background-color: #aee1e1;
    padding: 0.5rem;
    color: #ffffff;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 40rem) {
        width: 6rem; 
        font-size: 1rem;
    }
`



// For a button color that looks good with the background color #fbf8f5, you'll want a color that provides enough contrast to stand out but still complements the overall palette. Here are a few suggestions:

// Soft Blue: A soft or pastel blue can create a soothing contrast with the background. For example, #aee1e1 or #b0e0e6.
// Light Green: A light, minty green can provide a refreshing contrast. Consider #b2d8b2 or #a3d6a3.
// Light Coral: A subtle coral can add warmth. Try #f0a4a4 or #f4a7a7.
// Light Lavender: For a more unique choice, a light lavender shade like #d3b8d3 can provide a soft contrast.
