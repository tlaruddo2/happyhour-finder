import { Column, Container, Name, Description } from "./styled/card.styled";
import { Days } from "./days";
import { HappryhourType } from "./HarryhourType";
import { Contact } from "./Contact";
import { Distance } from "../Distance";
import { Details } from "./details";
import { Restaurant } from "state/types";

interface Props{
    restaurant: Restaurant;
    setIsCardClicked: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant>>
}
export const Card: React.FC<Props> = ({ restaurant, setIsCardClicked, setSelectedRestaurant }) => {
    const clickHandler = () => {
        setIsCardClicked(true);
        setSelectedRestaurant(restaurant);
    }

    return ( 
        <Container>
            <Column>
            <Name>{restaurant.name}</Name>
                <Description>{restaurant.detail}</Description>
                <Days days={restaurant.day}/>
                <div style={{fontSize: '0.8rem'}}>{restaurant.startTime} ~ {restaurant.endTime}</div>
            </Column>
            <Column style={{alignItems: "flex-end"}}>
                <HappryhourType isFood={restaurant.food} isDrink={restaurant.drink}/>
                <Contact googleMap={restaurant.googleMap} phone={restaurant.phone}/>
                <Distance/>
                <Details clickHandler={clickHandler}/>
            </Column>
        </Container>        
    )
}