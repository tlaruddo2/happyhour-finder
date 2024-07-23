import Logo from "../components/logo/logo"
import Layout from "../layout/layout";
import SearchBar from "../components/search-bar/search-bar";
import { useState } from "react";
import RestaurantsMap from "../components/restaurants-map/restautrants-map";
import { getCurrentDate, getCurrentTime } from "functions";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { ThemeColor } from "data/const";
import RestaurantList from "components/restaurant-list/restaurant-list";

//TODO: interface or type? 
//TODO: interaface cannot use lat
export interface Coord{
    lat: number, 
    lng: number
}

// export type Coord = [lat: number, lng: number]

const Home = () => { 
    const [ date, setDate ] = useState(getCurrentDate()); 
    const [ time, setTime ] = useState(getCurrentTime());
    const [ address, setAddress ] = useState("");

    const [ currentCoord, setCurrentCoord ] = useState<Coord>({ lat: 49.28, lng: -123.12 });
    
    navigator.geolocation.getCurrentPosition((position) => {   
        setCurrentCoord({lat: position.coords.latitude, lng: position.coords.longitude});
    },);

    return (
        <Layout>
            <Logo/>
            {/* <SearchBar setDate={setDate} setTime={setTime} setAddress={setAddress} setCurrentCoord={setCurrentCoord}/> */}
            <CurrentLocationIcon>
                <FontAwesomeIcon icon={faLocation} style={{color: ThemeColor.main, width: "80%", height: "80%"}}/>
            </CurrentLocationIcon>            
            <RestaurantsMap date={date} time={time} address={address} currentCoord={currentCoord} setCurrentCoord={setCurrentCoord}/>
            <RestaurantList/>
        </Layout>
    )
}

const CurrentLocationIcon = styled.div`
    position: fixed;
    right: 2%;
    bottom: 2%;
    height: 5%;
    width: 5%;
    background-color: white;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`


export default Home;