import { Container } from "./styled/detailed-card.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import type { Restaurant } from "state/types"

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
            <BackBtn onClick={clickHandler}>{'< '}Back</BackBtn>
            <SubTitle>Food</SubTitle>
            {restaurant.happyhourFood.map((food,i) => {
                return (
                    <Menu key={i}>
                        <div>
                            <Name>{food.name}</Name>
                            {food.description && <Description>- {food.description}</Description>}
                        </div>
                        <Price>{food.price}</Price>
                    </Menu>
                )
            })}
            <div style={{height: '1rem'}}></div>
            <SubTitle>Drink</SubTitle>
            {restaurant.happyhourDrink.map((drink,i) => {
                return (
                    <Menu key={i}>
                        <div>
                            <Name>{drink.name}</Name>
                            {drink.description && <Description>{drink.description}</Description>}
                        </div>
                        <Price>{drink.price}</Price>
                    </Menu>
                )
            })}            
        </Container>
    )
}

const BackBtn = styled.div`
    width: 4rem; 
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: underline;
    color: blue;

    &:hover{
        font-weight: 800;
    }

    @media (min-width: 40rem) {
        width: 6rem; 
        font-size: 1rem;
    }
    
`

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
`

const Menu = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
`

const Name = styled.div`
    
`

const Price = styled.div`
    
`

const Description = styled.div`
    font-size: 0.8rem;
    padding-left: 1rem;
    
`