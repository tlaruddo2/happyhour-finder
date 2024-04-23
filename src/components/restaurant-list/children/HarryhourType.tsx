import { faBeerMugEmpty, faBowlFood } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

interface Props{
    isFood: boolean, 
    isDrink: boolean,
}
export const HappryhourType: React.FC<Props> = ({ isFood, isDrink }) => {
    return (
        <Container>
            <FontAwesomeIcon 
                style={{ 
                    color: isFood ? '#F66F6F' : '#b8b8b8',
                    paddingRight: '0.3rem'
                }} 
                icon={faBowlFood} 
            />
            <FontAwesomeIcon 
                style={{ 
                    color: isFood ? '#F9C74F' : '#b8b8b8',
                    paddingRight: '0.3rem'
                }}             
                icon={faBeerMugEmpty} 
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`