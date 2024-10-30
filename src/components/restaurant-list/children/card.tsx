import { Column, Container, Name, DetailedType, Description, TextBtn } from "./styled/card.styled";
import { Contact } from "./Contact";
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
                <div style={{fontSize: '0.9rem'}}>{restaurant.distance.toFixed(2)} km</div>
                <TextBtn onClick={detailClickHandler}>Menus</TextBtn>
            </Column>
        </Container>        
    )
}