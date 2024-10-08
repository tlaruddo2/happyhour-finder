import styled from "styled-components";

interface ListContainerProps {
    $isSelected: boolean;
}
export const Container = styled.div<ListContainerProps>`
    position: absolute;
    top: 100%; 
    left: 50%;
    transform: translateX(-50%);
    height: 60%;
    width: 95%;   
    background-color: white;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    transition: transform 0.5s ease-in-out; 
    z-index: 1;
    overflow-y: auto;

    ${({ $isSelected }) => $isSelected && `
        // top: 50%;
        // left: 50%;
        transform: translate(-50%,-130%);
    `}    

    @media screen and (min-width: 40rem) {
        width: 50%;
    }

`

export const CardContainer = styled.div`
    
`