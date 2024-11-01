import { RestaurantType } from "state/types";
import { Container } from "./styled/sort-drop-down.styled"
import { RestaurantDetailedType } from "state/restaurants/restaurants-context";
import React, { useRef } from 'react';

interface Props{
    selectedRestaurantType: RestaurantType | 'All';
    setSelectedRestaurantType: React.Dispatch<React.SetStateAction<RestaurantType | 'All'>>;
    setSelectedRestaurantDetailedType: React.Dispatch<React.SetStateAction<RestaurantDetailedType | 'All'>>
}
export const SortDropDown: React.FC<Props> = ({ selectedRestaurantType, setSelectedRestaurantType, setSelectedRestaurantDetailedType }) => {
    const selectRef = useRef<HTMLSelectElement>(null)
    const detailedPubType = ['Pub', 'SportsBar', 'BrewPub', 'Tapas', 'ViewBar', 'WineBar']
    const detailedDiningType = ['CasualDining', 'FineDining', 'Seafood', 'Latin', 'Asian', 'Pizza']

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
            <div>
                <label htmlFor="restaurantType">Pub or Dining</label>
                <select name="restaurantType" onChange={handleRestTypeChanged}>
                    <option value="All">All</option>
                    <option value="Pub">Pub</option>    
                    <option value="Dining">Dining</option>                
                </select>
            </div>
            { selectedRestaurantType !== 'All' && 
            <div>
                <label htmlFor="restaurantDetailedType">Select Types</label>
                <select ref={selectRef} name="restaurantDetailedType" onChange={handleRestDetailTypeChanged}>
                    <option value="all">All</option>
                    {selectedRestaurantType === "Pub" ?
                    detailedPubType.map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                    ))
                    :
                    detailedDiningType.map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                    ))
                    }
                </select>                
            </div>
            }
        </Container>
    )
}