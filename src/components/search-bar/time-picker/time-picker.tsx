import styled from "styled-components";
import  Form  from "react-bootstrap/Form";
import { getCurrentTime } from "functions";

interface TimePickerProps{
  setTime: React.Dispatch<React.SetStateAction<string>>
}
const TimePicker = ({ setTime }: TimePickerProps) => {

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => { 
      setTime(e.target.value)
    }
    
    return ( 
        <Container>
          <Form.Control
            type="time"
            className="modalTextField"
            style={{ paddingRight: "6px" }}
            onChange={handleChange}
            defaultValue={getCurrentTime()}
          />
        </Container>
    )
}

const Container = styled.div`
  height: 300px;
  width: 400px;
  margin: 20px;
`

export default TimePicker