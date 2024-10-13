import styled from "styled-components";

interface ContainerProps{
    isClicked: boolean
}
export const Container = styled.div<ContainerProps>`
    left: 2.5;
    width: 96%;
    background-color: #fbf8f5;
    border: 1px solid #ccc;
    z-index: 0;
    border: none;
    border-radius: 10px;
    padding: 1rem;
`