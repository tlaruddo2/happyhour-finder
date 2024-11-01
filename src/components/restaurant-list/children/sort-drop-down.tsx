import { RestaurantType } from "state/types";
import { Container, Select, SubContainer, Title } from "./styled/sort-drop-down.styled"
import { RestaurantDetailedType } from "state/restaurants/restaurants-context";
import React, { useRef } from 'react';

interface Props{
    selectedRestaurantType: RestaurantType | 'All';
    setSelectedRestaurantType: React.Dispatch<React.SetStateAction<RestaurantType | 'All'>>;
    setSelectedRestaurantDetailedType: React.Dispatch<React.SetStateAction<RestaurantDetailedType | 'All'>>
}

const RestType = ['All', 'Pub', 'Dining']
const detailedPubType = ['Pub', 'SportsBar', 'BrewPub', 'Tapas', 'ViewBar', 'WineBar']
const detailedDiningType = ['CasualDining', 'FineDining', 'Seafood', 'Latin', 'Asian', 'Pizza']

export const SortDropDown: React.FC<Props> = ({ selectedRestaurantType, setSelectedRestaurantType, setSelectedRestaurantDetailedType }) => {
    const selectRef = useRef<HTMLSelectElement>(null)

    const handleRestTypeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue: string = e.target.value; 
        setSelectedRestaurantType(selectedValue as RestaurantType | 'All')
        setSelectedRestaurantDetailedType('All' as RestaurantDetailedType | 'All')
        if (selectRef.current) {
            selectRef.current.value = "all";
        }
    }

    const handleRestDetailTypeChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRestaurantDetailedType(e.target.value as RestaurantDetailedType | 'All')
    }

    return (
        <Container>
            <SubContainer>
                <Title>Pub / Dining</Title>
                <Select name="restaurantType" onChange={handleRestTypeChanged}>
                    {RestType.map((type, i) => <option key={i} value={type}>{type}</option>)}
                </Select>
            </SubContainer>
            {selectedRestaurantType !== 'All' && (
                <SubContainer>
                    <Title>Detailed</Title>
                    <Select ref={selectRef} name="restaurantDetailedType" onChange={handleRestDetailTypeChanged}>
                        <option value="all">All</option>
                        {(selectedRestaurantType === "Pub" ? detailedPubType : detailedDiningType).map((t, i) => (
                            <option key={i} value={t}>{t}</option>
                        ))}
                    </Select>
                </SubContainer>
            )}
        </Container>
    )
}