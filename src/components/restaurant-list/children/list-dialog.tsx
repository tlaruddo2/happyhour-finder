import type { Coord, Restaurant, RestaurantType } from "state/types";
import React, { useState, useRef, useEffect } from "react";
import { CardContainer, Container } from "./styled/list-dialog.styled"
import { Card } from "./card";
import { DetailedCard } from "./detailed-card";
import { useRestaurantContext } from "state/store";
import { SortDropDown } from "./sort-drop-down";
import { RestaurantDetailedType } from "state/restaurants/restaurants-context";

function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371.0; 

    const toRadians = (degrees: number) => degrees * (Math.PI / 180);

    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);

    const dlat = lat2Rad - lat1Rad;
    const dlon = lon2Rad - lon1Rad;

    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

interface Props{
    isSelected: boolean;
    currentCoord: Coord;
}
export const ListDialog: React.FC<Props> = ({ isSelected, currentCoord }) => {
    const restaurantContext = useRestaurantContext();
    const restaurants = restaurantContext.restaurants;
    
    const [ isCardClicked, setIsCardClicked ] = useState<boolean>(false);
    const [ selectedRestaurant, setSelectedRestaurant ] = useState<Restaurant>(restaurants[0]);
    const [ selectedRestaurantType, setSelectedRestaurantType] = useState<RestaurantType | 'All'>('All') 
    const [ selectedRestaurantDetailedType, setSelectedRestaurantDetailedType] = useState<RestaurantDetailedType | 'All'>('All') 
    const [sortedRestaurants, setSortedRestaurants] = useState<Restaurant[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sorted = restaurants.map((restaurant) => ({
            ...restaurant,
            distance: haversine(restaurant.lat, restaurant.lng, currentCoord.lat, currentCoord.lng),
        }))
        .filter((r) => selectedRestaurantType !== 'All' ? r.type === selectedRestaurantType : true)
        .filter((r) => selectedRestaurantDetailedType !== 'All' ? r.detailedType === selectedRestaurantDetailedType  : true)
        .sort((a, b) => a.distance - b.distance);
    
        setSortedRestaurants(sorted);
    }, [restaurants, currentCoord, selectedRestaurantType, selectedRestaurantDetailedType]);    
    
    return (    
        <Container $isSelected={isSelected} ref={containerRef}>
            <SortDropDown 
                selectedRestaurantType={selectedRestaurantType}
                setSelectedRestaurantType={setSelectedRestaurantType}
                setSelectedRestaurantDetailedType={setSelectedRestaurantDetailedType}
            />
            { isCardClicked 
                && <DetailedCard
                        restaurant={selectedRestaurant}
                        clickHandler = {() => setIsCardClicked(false)}
                        isClicked={isCardClicked}
                    />
            }            
            { !isCardClicked 
                && <CardContainer>
                        {sortedRestaurants.map((restaurnt, i) => {
                            return (
                                <Card 
                                    key={i}
                                    setIsCardClicked={setIsCardClicked}
                                    setSelectedRestaurant={setSelectedRestaurant}
                                    restaurant={restaurnt}/>
                        )})}
                    </CardContainer>
            }
        </Container>        
    )
}

