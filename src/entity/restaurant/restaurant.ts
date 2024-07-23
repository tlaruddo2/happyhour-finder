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

// "Mon Tue Wed Thr Fri Sat Sun"
export const restaurantSamples : Restaurant[] = [
    {
        id: 1, 
        name: "Earls Kitchen + Bar",
        address: "1185 Robson St, Vancouver, BC V6E 1B5",
        startTime: "14:00", 
        endTime: "17:00",
        day: "Mon Tue Wed Thr Fri Sat Sun", 
        food: true, 
        drink: true, 
        googleMap: "https://maps.app.goo.gl/rmMiKsTsDmGALtss7",
        detail: "Comfort Food Restaurant",
        lat: 49.285927, 
        lng: -123.126567,
        isInfoOpend: false,
        phone: '+16046690020'
    },
    {
        id: 2, 
        name: "Joey Burrard",
        address: "820 Burrard St, Vancouver, BC V6Z 1X9",
        startTime: "14:00", 
        endTime: "17:00",
        day: "Mon Tue Wed Thr Fri Sat Sun", 
        food: true, 
        drink: true, 
        googleMap: "https://maps.app.goo.gl/apxNAQS15B4t7uch7",
        detail: "Comfort Food Restaurant",
        lat: 49.282588813358075,
        lng: -123.12317349531799,
        isInfoOpend: false,
        phone: '+16046835639'
    },    
    {
        id: 3, 
        name: "Joe Fortes SeaFood & Chop House",
        address: "777 Thurlow St, Vancouver, BC V6E 3V5",
        startTime: "15:00", 
        endTime: "17:00",
        day: "Mon Tue Wed Thr Fri Sat Sun", 
        food: true, 
        drink: true, 
        googleMap: "https://maps.app.goo.gl/dEBwPs3XpdE9Vxbi7",
        detail: "Seafoor Restaurant",
        lat: 49.28494626649928,
        lng: -123.12455864593775,
        isInfoOpend: false,
        phone: '+16046691940'
    },      
    {
        id: 4, 
        name: "Bellaggio Cafe",
        address: "773 Hornby St, Vancouver, BC V6Z 1S4",
        startTime: "15:00", 
        endTime: "18:00",
        day: "Mon Tue Wed Thr Fri Sat Sun", 
        food: true, 
        drink: true, 
        googleMap: "https://maps.app.goo.gl/s9EFP97CRruSUzPL7",
        detail: "Italian Restaurant",
        lat: 49.28298500000001,
        lng: -123.12151987702227,
        isInfoOpend: false,
        phone: '+16044081281'
    },       


    

    
]