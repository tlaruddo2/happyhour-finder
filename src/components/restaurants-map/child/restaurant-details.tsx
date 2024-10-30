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
            {restaurant.happyhourDrink.map((f, i) => {
                return <RestaurantDetailsRow key={i} name={f.name} price={f.price}/>
            })}
            <Divider/>
            <Title>Food</Title>
            {restaurant.happyhourFood.map((d,i) => {
                return <RestaurantDetailsRow key={i} name={d.name} price={d.price}/>
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
    text-decoration: underline;
    color: blue;

    &:hover{
        font-weight: 700;
        color: blue;
        cursor: pointer;
    }    
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1rem;
    margin: 0.2rem 0rem;
`

const FirstRow = styled.div`
    width: 100%; 
    display: flex; 
    justify-content: space-between;
`

const Divider = styled.div`
    height: 0.05rem; 
    background-color: #b6b4b4;
    margin: 0.7rem 0rem;
    
`
export default RestaurantDetails;