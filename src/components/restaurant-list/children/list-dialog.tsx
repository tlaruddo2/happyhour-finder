import React, { useState, useRef, useEffect } from "react";
import { Restaurant, restaurantSamples } from "entity/restaurant/restaurant"
import { CardContainer, Container } from "./styled/list-dialog.styled"
import { Card } from "./card";
import { DetailedCard } from "./detailed-card";

interface Props{
    isSelected: boolean
}
export const ListDialog: React.FC<Props> = ({ isSelected }) => {
    const [ isCardClicked, setIsCardClicked ] = useState<boolean>(false);
    const [ selectedRestaurant, setSelectedRestaurant ] = useState<Restaurant>(restaurantSamples[0]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [ currentTop, setCurrentTop ] = useState<number>(0); 

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollTop = containerRef.current.scrollTop;
                setCurrentTop(scrollTop);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    
    return (    
        <Container isSelected={isSelected} ref={containerRef}>
            {/* <SortDropDown/> */}
            <CardContainer>
                {restaurantSamples.map((restaurnt, i) => {
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

