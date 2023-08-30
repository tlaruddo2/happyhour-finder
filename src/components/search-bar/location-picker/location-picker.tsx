import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const LocationPicker = () => {
    return (
        <Container>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="address"
                aria-label="address"
                aria-describedby="basic-addon1"
                />
                <Button variant="outline-secondary" id="button-addon1">
                    Current Location
                </Button>
            </InputGroup>            
        </Container>

    )
}

const Container = styled.div`
  height: 300px;
  width: 400px;
  margin: 20px;
`

export default LocationPicker;