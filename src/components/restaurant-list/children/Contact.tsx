import styled from "styled-components"

interface Props{
    googleMap: string, 
    phone: string
}
export const Contact: React.FC<Props> = ({ googleMap,  phone}) => {
    return (
        <Container>
            <TextBtn style={{marginRight: "0.5rem"}}>
                <a href={googleMap} target="'_blank'">Map</a>
            </TextBtn>
            <TextBtn>
                <a href={`tel:${phone}`}>Phone</a>                
            </TextBtn>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    
`

export const TextBtn = styled.div`
    font-size: 0.8rem;
    text-decoration: underline;
    color: blue;

    &:hover{
        font-weight: 700;
    }
`