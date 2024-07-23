import styled from "styled-components";

interface ContainerProps{
    currentTop: number
    isClicked: boolean
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    top: ${({ currentTop }) => `${currentTop + 10}px`};
    left: 2.5;
    height: 100%;
    width: 96%;
    background-color: #fbf8f5;
    border: 1px solid #ccc;
    z-index: 0;
    border: none;
    border-radius: 10px;
    padding: 1rem;
`