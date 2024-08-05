import { createContext, useReducer, useContext, useEffect, useCallback } from "react";
import restaurantsData from './restaurants.json'

export type Restaurant = { 
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

type RestaurantState = {
    restaurants: Restaurant[];
}

type RestaurantAction = 
        | { type: "setRestaurants"; payload: Restaurant[] }
        | { type: "addRestaurant"; payload: Restaurant }
        | { type: "removeRestaurant"; payload: number }; //id


function useRestaurantSource(): {
    restaurants: Restaurant[];
    setRestaurants: (restaurants: Restaurant[]) => void;
    addRestaurant: (restaurant: Restaurant) => void;
    removeRestaurant: (id: number) => void;
} {
    const [{restaurants}, dispatch ] = useReducer(
        (state: RestaurantState, action: RestaurantAction) => {
            switch (action.type){
                case "setRestaurants":
                    return {...state, restaurants: action.payload};
                case "addRestaurant":
                    return {...state, restaurants: [...state.restaurants, action.payload]};
                case "removeRestaurant":
                    return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload) };
            }
        },
        {restaurants: []}
    )

    useEffect(() => {
        const fetchRestaurants = async () => {
            dispatch({ type: "setRestaurants", payload: restaurantsData })
        };
        fetchRestaurants();
    }, []);

    const setRestaurants = useCallback((restaurants: Restaurant[]) => {
        dispatch({ type: "setRestaurants", payload: restaurants });
    }, []);

    const addRestaurant = useCallback((restaurant: Restaurant) => {
        dispatch({ type: "addRestaurant", payload: restaurant });
    }, []);

    const removeRestaurant = useCallback((id: number) => {
        dispatch({ type: "removeRestaurant", payload: id });
    }, []);

    return { restaurants, setRestaurants, addRestaurant, removeRestaurant };
}

const RestaurantConext = createContext<ReturnType<typeof useRestaurantSource>>(
    {} as unknown as ReturnType<typeof useRestaurantSource>
);

const useRestaurantContext = () => {
    return useContext(RestaurantConext);
}

const RestaurantProvider = ({ children }: {children: React.ReactNode}) => {
    return (
        <RestaurantConext.Provider value={useRestaurantSource()}>
            {children}
        </RestaurantConext.Provider>
    )
}

export { RestaurantProvider, useRestaurantContext };