export interface Restaurant{
    id: number;
    name: string;
    address: string;
    startTime: string;
    endTime: string;
    day: string;
    food: boolean;
    drink: boolean;
    link: string;
    detail: string;
}


export const restaurantSamples : Restaurant[] = [
    {
        id: 1, 
        name: "momo sushi 1",
        address: "1230 Robson Vancouver",
        startTime: "11:00", 
        endTime: "22:00",
        day: "Thr", 
        food: true, 
        drink: false, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 1"
    },
    {
        id: 2, 
        name: "momo sushi 2",
        address: "1230 Robson Vancouver",
        startTime: "16:00", 
        endTime: "22:00",
        day: "Thr Tue", 
        food: true, 
        drink: false, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 2"
    },
    {
        id: 3, 
        name: "momo sushi 3",
        address: "1234 Davie Vancouver",
        startTime: "18:00", 
        endTime: "22:00",
        day: "Mon", 
        food: true, 
        drink: false, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 3"
    },
    
]