import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

interface Props{
    googleMap: string, 
    phone: string
}
export const Contact: React.FC<Props> = ({ googleMap,  phone}) => {
    return (
        <Container>
             {/* //Google map icon */}
             <a href={googleMap} target="'_blank'">
                <FontAwesomeIcon 
                    style={{paddingRight: '0.3rem'}}
                    icon={faPhone} />
            </a>
            <a href={`tel:${phone}`} style={{ marginRight: '0.3rem' }}>
                <FontAwesomeIcon icon={faPhone} />
            </a>                
        </Container>
    )
}

const Container = styled.div`
    
`