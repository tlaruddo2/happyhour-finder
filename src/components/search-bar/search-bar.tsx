import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ThemeColor } from "data/const";

interface SearchBarProps { 
    setDate: React.Dispatch<React.SetStateAction<string>>;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar = ({ setDate, setTime, setAddress }: SearchBarProps) => {
    const hanldeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

    return (
        <Container>
            <SearchInput type="text" placeholder="Type address"/>
            <FontAwesomeIcon icon={faMagnifyingGlass}  style={{ color: ThemeColor.main}}/>
        </Container>
    )
}

const Container = styled.div`  
    position: fixed;
    right: 2%;
    top: 2%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
    width: 12rem;
    border-radius: 20px;
    border: none;
    background-color: white;
    padding: 0 20px 0 0;
    font-size: 0.9rem;

    @media (min-width: 40rem) {
        width: 20rem;
        
    }
`

const SearchInput = styled.input`
    padding: 0rem 1rem;
    border: none;
    border-radius: 10px;
    width: 90%;
`

export default SearchBar;