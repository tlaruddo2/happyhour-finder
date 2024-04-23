import { Restaurant } from "entity/restaurant/restaurant"
import { Container } from "./styled/detailed-card.styled"

interface Props{
    clickHandler: () => void
    restaurant: Restaurant
    currentTop: number
}
export const DetailedCard: React.FC<Props> = ({ clickHandler, restaurant, currentTop }) => {
    return ( 
        <Container currentTop={currentTop} onClick={clickHandler}>
            <div>close</div>
            <div>{restaurant.name}</div>
        </Container>
    )
}

