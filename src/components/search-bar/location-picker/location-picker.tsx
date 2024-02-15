import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

interface LocationPickerProps {
    setAddress: React.Dispatch<React.SetStateAction<string>>
}
const LocationPicker = ({ setAddress }: LocationPickerProps) => {


    return (
        <Container>
    
        </Container>

    )
}

const Container = styled.div`
    position: fixed;
    right: 2%;
    top: 2%;
    height: 100%;
    width: 30%; 


`

export default LocationPicker;