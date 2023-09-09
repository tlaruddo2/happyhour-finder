import styled from "styled-components"
import TimePicker from "./time-picker/time-picker"
import LocationPicker from "./location-picker/location-picker"
import DatePicker from "./date-picker/date-picker"

interface SearchBarProps { 
    setDate: React.Dispatch<React.SetStateAction<string>>;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar = ({ setDate, setTime, setAddress }: SearchBarProps) => {
    return (
        <Container>
            <DatePicker setDate={setDate}/>
            <TimePicker setTime={setTime}/>
            <LocationPicker setAddress={setAddress}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
`

export default SearchBar;