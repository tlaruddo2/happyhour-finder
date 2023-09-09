import TableRow from "./child/table-row";
import TableHead from "./child/table-head";
import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { Restaurant, restaurantSamples } from "../../entity/restaurant/restaurant";

interface RestaurantTableProps{
    date: string,
    time: string,
    address: string,
}
const RestaurantsTable = ({ date, time, address }: RestaurantTableProps) => {

    const filteredSamples: Restaurant[] = restaurantSamples.filter((restaurants) => 
        restaurants.address.includes(address)
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