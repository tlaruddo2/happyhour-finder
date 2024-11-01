import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 0.5rem;
    justify-content: space-between;
`

export const SubContainer = styled.div`
    display: flex;
`

export const Title = styled.h3`
    font-size: 0.8rem;
    font-weight: 800;
    padding-right: 0.5rem;
    margin: 0;
    align-self: center;
`

export const Select = styled.select`
    font-size: 0.8rem;
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    outline: none;
    &:hover {
        border-color: #888;
    }
    &:focus {
        border-color: #555;
    }
`