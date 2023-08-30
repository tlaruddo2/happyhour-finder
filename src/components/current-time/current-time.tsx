import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CurrentTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <Container>
            <Wrapper>{date.toLocaleDateString()}</Wrapper>
            <Wrapper>{date.toLocaleTimeString()} PST</Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Wrapper = styled.h2`
    padding: 30px 10px;
    
`
export default CurrentTime;