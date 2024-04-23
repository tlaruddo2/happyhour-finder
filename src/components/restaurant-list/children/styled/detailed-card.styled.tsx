import styled from "styled-components";

interface ContainerProps{
    currentTop: number
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    top: ${({ currentTop }) => `${currentTop}px`};
    left: 0;
    height: 100%;
    width: 100%;
    background-color: yellow;
    z-index: 0;
    border: 1px solid #000000;
    border-radius: 10px;
`