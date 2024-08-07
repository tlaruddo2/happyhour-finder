import styled from "styled-components"

interface Props {
    name: string,
    price: string
}
const RestaurantDetailsRow: React.FC<Props> = ({ name, price }) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Name = styled.div`
    font-weight: 500
`

const Price = styled.div`
`

export default RestaurantDetailsRow;