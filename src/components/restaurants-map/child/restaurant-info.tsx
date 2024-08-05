import type { Restaurant } from "state/types"
import styled from "styled-components"

interface Props {
    restaurant: Restaurant
}
export const RestaurantInfo: React.FC<Props> = ({ restaurant }) => {
    return (
        <Container>
            <Name>{restaurant.name}</Name>
            {/* <Description>{restaurant.detail}</Description> */}
            <Days days={restaurant.day}/>
            <div style={{fontSize: '0.8rem'}}>{restaurant.startTime} ~ {restaurant.endTime}</div>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    margin-right: 0.1rem;
`

export const Name = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0rem;
    width: 100%
`

export const Description = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
`


interface DaysProps{
    days: string
}
const Days: React.FC<DaysProps> = ({ days }) => {
    const text = [ 'M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const color = ['#FF0000', '#FFA500' ,'#FFFF00', '#008000', '#0000FF', '#4b0082', '#EE82EE']
    let openDays = [false, false, false, false, false, false, false]

    if ( days.includes('Mon')) openDays[0] = true;
    if ( days.includes('Tue')) openDays[1] = true;
    if ( days.includes('Wed')) openDays[2] = true;
    if ( days.includes('Thr')) openDays[3] = true;
    if ( days.includes('Fri')) openDays[4] = true;
    if ( days.includes('Sat')) openDays[5] = true;
    if ( days.includes('Sun')) openDays[6] = true;

    return (
        <div style={{display: "flex", marginBottom: '0.3rem'}}>
            {text.map((t,i) => {
                return (
                    <div style={{
                        fontSize: '0.8rem',
                        fontWeight: openDays[i] ? '1000' : '300',
                        color: openDays[i] ? color[i] : 'grey',
                        paddingRight: '1.5px'
                    }}>
                        {t}
                    </div>
                )
            })}
        </div>
    )
}