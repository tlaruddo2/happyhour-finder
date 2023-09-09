import styled from "styled-components"

interface ModeSwitchProps{
    setTable: React.Dispatch<React.SetStateAction<boolean>>
}
const ModeSwitch = ({ setTable }: ModeSwitchProps) => { 

    return (
        <Container>
            <button onClick={() => setTable(true)}>Table</button>
            <button onClick={() => setTable(false)}>Map</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-bottom: 10px;
`

export default ModeSwitch;