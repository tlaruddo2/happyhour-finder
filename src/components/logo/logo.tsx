import { ThemeColor } from "data/const";
import styled from "styled-components";

const Logo = () => {
    return (
        <Container href="/">
            Happyhour
        </Container>
    )
}

const Container = styled.a`
    position: fixed;
    left: 2%;
    top: 2%;
    border: none;
    border-radius: 10px;
    background-color: ${ThemeColor.main};
    color: white;
    z-index: 1;
    padding: 10px;
    font-weight: 600;
    height: 5%;
`

export default Logo;