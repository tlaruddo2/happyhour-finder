export interface Restaurant{
    id: number;
    name: string;
    address: string;
    time: string;
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
        time: "9-5pm", 
        day: "Thur", 
        food: true, 
        drink: false, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 1"
    },
    {
        id: 2, 
        name: "momo sushi 2",
        address: "1230 Robson Vancouver",
        time: "9-5pm", 
        day: "Thur", 
        food: false, 
        drink: true, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 2"
    },
    {
        id: 3, 
        name: "momo sushi 3",
        address: "1230 Robson Vancouver",
        time: "9-5pm", 
        day: "Thur", 
        food: true, 
        drink: false, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 3"
    },
    {
        id: 4, 
        name: "momo sushi 4",
        address: "1230 Robson Vancouver",
        time: "9-5pm", 
        day: "Thur", 
        food: false, 
        drink: true, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 4"
    },    
    {
        id: 5, 
        name: "momo sushi 5",
        address: "1230 Robson Vancouver",
        time: "9-5pm", 
        day: "Thur", 
        food: false, 
        drink: true, 
        link: "https://goo.gl/maps/5XvSAuxBzrDFdQ4B8",
        detail: "detail 5"
    },    
]