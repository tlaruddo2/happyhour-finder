import type { Coord } from "state/types";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ListDialog } from "./children/list-dialog";
import { Container, ListButton } from "./restaurant-list.styled";


interface Props {
    currentCoord: Coord
}
const RestaurantList: React.FC<Props> = ({ currentCoord }) => {
    const [isSelected, setIsSelected] = useState(false)
    const clickHandler = () => setIsSelected(!isSelected)

    return (
        <Container>
            <ListButton onClick={clickHandler}>
                <FontAwesomeIcon icon={faList} />
                <div style={{marginLeft: "10px"}}>List</div>
            </ListButton>       
            <ListDialog currentCoord={currentCoord} isSelected={isSelected}/>
        </Container>
    )
}

export default RestaurantList;