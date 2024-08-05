import styled from "styled-components"
import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import type { Coord } from "state/types";

interface SearchBarProps { 
    // setDate: React.Dispatch<React.SetStateAction<string>>;
    // setTime: React.Dispatch<React.SetStateAction<string>>;
    // setAddress: React.Dispatch<React.SetStateAction<string>>,
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}
const SearchBar = ({ setCurrentCoord }: SearchBarProps) => {
    // const hanldeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    //     setAddress(e.target.value);
    // }

    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete;
    };

    const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry) {
            const lat = place.geometry.location?.lat();
            const lng = place.geometry.location?.lng();
            if (lat !== undefined && lng !== undefined) {
                setCurrentCoord({ lat, lng });
                console.log("Selected Place:", { lat, lng });
            }
        }
    }
    };
    

    return (
        <Container>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <SearchInput type="text" placeholder="Type address"/>
                {/* <FontAwesomeIcon icon={faMagnifyingGlass}  style={{ color: ThemeColor.main}}/> */}
            </Autocomplete>
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
    padding: 0 10px 0 0;
    font-size: 0.9rem;

    @media (min-width: 40rem) {
        width: 20rem;
        
    }
`

const SearchInput = styled.input`
    padding: 0rem 1rem;
    border: none;
    border-radius: 10px;
    width: 100%;
`

export default SearchBar;