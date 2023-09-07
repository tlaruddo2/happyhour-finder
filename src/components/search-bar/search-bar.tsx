import styled from "styled-components"
import TimePicker from "./time-picker/time-picker"
import LocationPicker from "./location-picker/location-picker"
import DatePicker from "./date-picker/date-picker"

const SearchBar = () => {
    return (
        <Container>
            <DatePicker/>
            <TimePicker/>
            <LocationPicker/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
`

export default SearchBar;