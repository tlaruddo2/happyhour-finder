import TableRow from "./child/table-row";
import TableHead from "./child/table-head";
import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { Restaurant, restaurantSamples } from "../../entity/restaurant/restaurant";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

const RestaurantsTable = () => {
    const [input, setInput] = useState("");

    const filteredSamples: Restaurant[] = restaurantSamples.filter((restaurants) => 
        restaurants.name.includes(input)
    )

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <Container>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="address"
                aria-label="address"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                />
                <Button variant="outline-secondary" id="button-addon1">
                    Current Location
                </Button>
            </InputGroup>                 
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