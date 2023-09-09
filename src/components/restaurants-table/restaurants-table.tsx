import TableRow from "./child/table-row";
import TableHead from "./child/table-head";
import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { Restaurant, restaurantSamples } from "../../entity/restaurant/restaurant";
import checkInTimeRange from "../../functions/check-in-time-range";

interface RestaurantTableProps{
    date: string,
    time: string,
    address: string,
}
const RestaurantsTable = ({ date, time, address }: RestaurantTableProps) => {

    const filteredSamples: Restaurant[] = restaurantSamples.filter((restaurant) => 
        restaurant.address.includes(address) && checkInTimeRange(restaurant.startTime, restaurant.endTime, time) && restaurant.day.includes(date)
    );

    return (
        <Container>              
            <Table striped bordered hover> 
                <TableHead/>
                {filteredSamples.map(r => <TableRow restaurant={r} key={r.id}/>)}
            </Table>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default RestaurantsTable; 