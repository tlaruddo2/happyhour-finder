import styled from "styled-components";
import  Form  from "react-bootstrap/Form";

const TimePicker = () => {
    return ( 
        <Container>
          <Form.Control
            type="time"
            className="modalTextField"
            style={{ paddingRight: "6px" }}
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