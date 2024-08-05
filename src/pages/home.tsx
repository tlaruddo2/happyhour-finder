import type { Coord } from "state/types"
import Logo from "components/logo/logo"
import Layout from "layout/layout";
import { useEffect, useState } from "react";
import RestaurantsMap from "components/restaurants-map/restautrants-map";
import RestaurantList from "components/restaurant-list/restaurant-list";
import { CurrentLocationIcon } from "components";

const Home = () => { 
    const [ currentCoord, setCurrentCoord ] = useState<Coord>({ lat: 49.28, lng: -123.12 });
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {   
            setCurrentCoord({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    },[])

    return (
        <Layout>    
            <Logo/>          
            <CurrentLocationIcon/>
            <RestaurantsMap currentCoord={currentCoord} setCurrentCoord={setCurrentCoord}/>
            <RestaurantList/>
        </Layout>
    )
}

export default Home;