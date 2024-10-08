import { Column, Container, Name, DetailedType, Description, TextBtn } from "./styled/card.styled";
import { Days } from "./days";
// import { HappryhourType } from "./HarryhourType";
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
    const detailClickHandler = () => {
        setIsCardClicked(true);
        setSelectedRestaurant(restaurant);
    }

    return ( 
        <Container>
            <Column>
            <Name>{restaurant.name}</Name>
                <DetailedType>{restaurant.detailedType}</DetailedType>
                <Description>{restaurant.description}</Description>
                <Description>{restaurant.happyhourHour}</Description>
            </Column>
            <Column style={{alignItems: "flex-end"}}>
                <Contact googleMap={restaurant.googleMap} phone={restaurant.phone}/>
                <Distance/>
                <TextBtn onClick={detailClickHandler}>Details</TextBtn>
            </Column>
        </Container>        
    )
}