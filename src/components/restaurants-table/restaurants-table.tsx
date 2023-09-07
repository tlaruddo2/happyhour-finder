import TableRow from "./child/table-row";
import TableHead from "./child/table-head";
import styled from "styled-components";

const RestaurantsTable = () => {
    return (
        <Container>
            <table> 
                <TableHead/>
                {info.map((info, i) => <TableRow info={info} key={i}/>)}
            </table>
        </Container>
    )
}

const Container = styled.div`
    margin: auto;
`

const info = [
    {
        id:1, 
        name: "jin",
        phone: "778887283",
        email: "tlasfj@gmai.com",
        country: "ahah",
        alphanumeric: "asdfa",
    },
    {
        id:2, 
        name: "axs",
        phone: "778887283",
        email: "tlasfj@gmai.com",
        country: "ahah",
        alphanumeric: "asdfa",
    },
    {
        id:3, 
        name: "sdf",
        phone: "778887283",
        email: "tlasfj@gmai.com",
        country: "ahah",
        alphanumeric: "asdfa",
    }
    
]

export default RestaurantsTable; 