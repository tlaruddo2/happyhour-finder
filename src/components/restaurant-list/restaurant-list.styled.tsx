import styled from "styled-components";
import { ThemeColor } from "const/const";

export const Container = styled.div`
    
`

export const ListButton = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2%; 
    z-index: 1;
    background-color: ${ThemeColor.main};
    width: 100px;
    height: 40px;
    border-radius: 10px;
    display: flex;
`