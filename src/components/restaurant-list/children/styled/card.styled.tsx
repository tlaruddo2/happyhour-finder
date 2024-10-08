import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 20px;
    background-color: #f2eeea;
    display: flex;
`

export const Column = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`
export const Name = styled.h2`
    font-size: 1rem;
    font-weight: 700;
`

export const DetailedType = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
`

export const Description = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
`

export const TextBtn = styled.div`
    font-size: 0.8rem;
    text-decoration: underline;
    color: blue;

    &:hover{
        font-weight: 700;
    }
`