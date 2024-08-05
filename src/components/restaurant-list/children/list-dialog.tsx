import React, { useState, useRef, useEffect } from "react";
import { CardContainer, Container } from "./styled/list-dialog.styled"
import { Card } from "./card";
import { DetailedCard } from "./detailed-card";
import { useRestaurantContext } from "state/store";
import { Restaurant } from "state/types";

interface Props{
    isSelected: boolean
}
export const ListDialog: React.FC<Props> = ({ isSelected }) => {
    const restaurantContext = useRestaurantContext();
    const restaurants = restaurantContext.restaurants;
    
    const [ isCardClicked, setIsCardClicked ] = useState<boolean>(false);
    const [ selectedRestaurant, setSelectedRestaurant ] = useState<Restaurant>(restaurants[0]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [ currentTop, setCurrentTop ] = useState<number>(0); 

    useEffect(() => {
        const containter = containerRef.current;
        const handleScroll = () => {
            if (containter) {
                const scrollTop = containter.scrollTop;
                setCurrentTop(scrollTop);
            }
        };

        if (containter) {
            containter.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containter) {
                containter.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    
    return (    
        <Container isSelected={isSelected} ref={containerRef}>
            {/* <SortDropDown/> */}
            <CardContainer>
                {restaurants.map((restaurnt, i) => {
                    return (
                        <Card 
                            key={i}
                            setIsCardClicked={setIsCardClicked}
                            setSelectedRestaurant={setSelectedRestaurant}
                            restaurant={restaurnt}/>
                )})}
            </CardContainer>
            { isCardClicked && <DetailedCard
                                    currentTop={currentTop}
                                    restaurant={selectedRestaurant}
                                    clickHandler = {() => setIsCardClicked(false)}
                                    isClicked={isCardClicked}
                                />
            }
        </Container>        
    )
}

