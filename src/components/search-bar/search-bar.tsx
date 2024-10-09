import styled from "styled-components"
import { Autocomplete } from "@react-google-maps/api";
import { useRef, useState } from "react";
import type { Coord } from "state/types";

interface SearchBarProps { 
    setCurrentCoord: React.Dispatch<React.SetStateAction<Coord>>
}
const SearchBar = ({ setCurrentCoord }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState<string>(""); 
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
            }
        }

        if (place.formatted_address)
        {
            setInputValue(place.formatted_address);
        }
    }
    };

    const clearInput = () => {
        setInputValue("");
    };    
    

    return (
        <Container>
            <AutocompleteWrapper>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <SearchInput 
                        type="text" 
                        placeholder="Type address"
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}                         
                        />
                </Autocomplete>
            </AutocompleteWrapper>
            <div style={{width: "10%", fontWeight: 700, cursor: "pointer"}} onClick={clearInput}>
                x
            </div>
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
    padding: 0 0 0 0;
    font-size: 0.9rem;

    @media (min-width: 40rem) {
        width: 20rem;
        
    }
`

const SearchInput = styled.input`
    padding: 0rem 2rem;
    border: none;
    border-radius: 10px;
    width: 100%;
    font-size: 0.8rem;
`

const AutocompleteWrapper = styled.div`
    width: 90%;
    margin: 1rem;
`;

export default SearchBar;