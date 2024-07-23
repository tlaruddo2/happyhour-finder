import { Restaurant } from "entity/restaurant/restaurant"
import styled from "styled-components"
import { faCircleInfo, faMap, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    restaurant: Restaurant
}
export const MenuInfo: React.FC<Props> = ({ restaurant }) => {
    return (
        <Container>
            <HappryhourType isFood={restaurant.food} isDrink={restaurant.drink}/>
            <Contact googleMap={restaurant.googleMap} phone={restaurant.phone}/>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    height: 100%;
`

interface HappryhourTypeProps{
    isFood: boolean, 
    isDrink: boolean,
}
export const HappryhourType: React.FC<HappryhourTypeProps> = ({ isFood, isDrink }) => {
    return (
        <HappryhourTypeContainer>
            <div
                style={{
                    color: isFood ? '#F66F6F' : '#b8b8b8',
                    paddingRight: '0.3rem', 
                    fontWeight: 500,
                    fontSize: '1rem',
                }}
            >
                Food
            </div>
            <div
                style={{
                    color: isFood ? '#F9C74F' : '#b8b8b8',
                    paddingRight: '0.3rem',
                    fontWeight: 500,
                    fontSize: '1rem',
                }}
            >
                Drinks
            </div>            
        </HappryhourTypeContainer>
    )
}

const HappryhourTypeContainer = styled.div`
    display: flex;
    width: 100%; 
    justify-content: space-around;
    height: 20%;
`

interface ContactProps{
    googleMap: string, 
    phone: string,
}
export const Contact: React.FC<ContactProps> = ({ googleMap,  phone}) => {
    return (
        <div style={{height: '80%', display: "flex", justifyContent: 'space-around', alignItems: 'center'}}>
             <a href={googleMap} target="'_blank'" style={{height: '30%', width: '30%'}}>
                <FontAwesomeIcon 
                    style={{paddingRight: '0.3rem', width: '100%', height: '100%'}}
                    icon={faMap} />
            </a>
            <a href={`tel:${phone}`} style={{height: '30%', width: '30%'}}>
                <FontAwesomeIcon style={{paddingRight: '0.3rem', width: '100%', height: '100%',}}
 icon={faPhone} />
            </a>                
        </div>
    )
}

export const Distance: React.FC = () => {
    return (
        <div style={{fontSize: '0.9rem'}}>
            5km
        </div>
    )
}

interface DetailsProps{
    clickHandler: () => void;
}
export const Details: React.FC<DetailsProps> = ({ clickHandler }) => {
    return (
        <DetailsContainer onClick={() => clickHandler()}>
            <FontAwesomeIcon style={{paddingRight: '0.3rem', color: '#3498db'}}icon={faCircleInfo} />
            {/* Details */}
            {/* <Text>Details</Text> */}
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div`
    /* width: 100%; */
    display: flex; 
    font-size: 1rem;
    align-items: center;
    padding-top: 0.5rem;
    cursor: pointer;
`