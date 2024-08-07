import type { Restaurant } from "state/types"
import styled from "styled-components"
import RestaurantDetailsRow from "./restaurant-details-row"

interface Props {
    setDetailsClicked: React.Dispatch<React.SetStateAction<boolean>>
    restaurant: Restaurant
}
const RestaurantDetails: React.FC<Props> = ({ setDetailsClicked, restaurant }) => {
    return(
        <Container>
            <FirstRow>
                <Title>Drinks</Title>
                <BackBtn onClick={()=>setDetailsClicked(false)}>{'<-'} Back</BackBtn>
            </FirstRow>
            {restaurant.food.map((f, i) => {
                return <RestaurantDetailsRow name={f.name} price={f.price}/>
            })}
            <Title>Food</Title>
            {restaurant.drink.map((d,i) => {
                return <RestaurantDetailsRow name={d.name} price={d.price}/>
            })}                    
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    overflow-y: auto; 
`
const BackBtn = styled.div`
    cursor: pointer;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1rem;
    margin: 0.2rem 0rem;
`

const FirstRow = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between
`

export default RestaurantDetails;