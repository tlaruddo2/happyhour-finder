import styled from "styled-components";
import  Form  from "react-bootstrap/Form";

const DatePicker = () => {
    return ( 
        <Container>
          <Form.Control
            type="date"
            className="modalTextField"
            style={{ paddingRight: "6px" }}
          />
        </Container>
    )
}

const Container = styled.div`
  height: 100px;
  width: 400px;
  margin: 20px;
`

export default DatePicker