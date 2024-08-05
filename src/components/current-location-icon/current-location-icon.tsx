import { faLocation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeColor } from "const/const"
import styled from "styled-components"

export const CurrentLocationIcon = () => {
    return (
        <Container>
            <FontAwesomeIcon icon={faLocation} style={{color: ThemeColor.main, width: "80%", height: "80%"}}/>
        </Container>  
    )
}


const Container = styled.div`
    position: fixed;
    right: 2%;
    bottom: 2%;
    height: 5%;
    width: 5%;
    background-color: white;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

