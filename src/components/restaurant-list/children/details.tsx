import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface Props{
    clickHandler: () => void;
}
export const Details: React.FC<Props> = ({ clickHandler }) => {
    return (
        <Container onClick={() => clickHandler()}>
            <FontAwesomeIcon style={{paddingRight: '0.3rem', color: '#3498db'}}icon={faCircleInfo} />
            {/* Details */}
            {/* <Text>Details</Text> */}
        </Container>
    )
}

const Container = styled.div`
    /* width: 100%; */
    display: flex; 
    font-size: 1rem;
    align-items: center;
    padding-top: 0.5rem;
`

// const Text = styled.div`
//     font-size: '0.5rem';
// `