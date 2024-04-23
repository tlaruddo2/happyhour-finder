export interface Restaurant{
    id: number;
    name: string;
    address: string;
    startTime: string;
    endTime: string;
    day: string;
    food: boolean;
    drink: boolean;
    googleMap: string;
    detail: string;
    lat: number,
    lng: number,
    isInfoOpend: boolean,
    phone: string,
}


export const restaurantSamples : Restaurant[] = [
    {
        id: 1, 
        name: "MoMo Sushi",
        address: "1230 Robson Vancouver",
        startTime: "11:00", 
        endTime: "22:00",
        day: "Mon Tue", 
        food: true, 
        drink: false, 
        googleMap: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "Japanese Restaurant",
        lat: 49.2867223,
        lng: -123.1322211,
        isInfoOpend: false,
        phone: '7788633853'
    },
    {
        id: 2, 
        name: "Noah's Cafe",
        address: "1096 Denman St, Vancouver, BC V6G 2M8",
        startTime: "16:00", 
        endTime: "22:00",
        day: "Thr Tue", 
        food: false, 
        drink: true, 
        googleMap: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 2",
        lat: 49.2877156,
        lng: -123.1385097,
        isInfoOpend: false,
        phone: '7788633853'
    },
    {
        id: 3, 
        name: "Cardero Cafe",
        address: "1016 Cardero St, Vancouver, BC V6G 2H1",
        startTime: "18:00", 
        endTime: "22:00",
        day: "Mon", 
        food: true, 
        drink: true, 
        googleMap: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 3",
        lat: 49.287398,
        lng: -123.1385981,
        isInfoOpend: false,
        phone: '7788633853'
    },
    {
        id: 3, 
        name: "Cardero Cafe",
        address: "1016 Cardero St, Vancouver, BC V6G 2H1",
        startTime: "18:00", 
        endTime: "22:00",
        day: "Mon", 
        food: true, 
        drink: true, 
        googleMap: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 3",
        lat: 49.287398,
        lng: -123.1385981,
        isInfoOpend: false,
        phone: '7788633853'
    },
    {
        id: 3, 
        name: "Cardero Cafe",
        address: "1016 Cardero St, Vancouver, BC V6G 2H1",
        startTime: "18:00", 
        endTime: "22:00",
        day: "Mon", 
        food: true, 
        drink: true, 
        googleMap: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 3",
        lat: 49.287398,
        lng: -123.1385981,
        isInfoOpend: false,
        phone: '7788633853'
    },        
    
]