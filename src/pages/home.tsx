import Logo from "../components/logo/logo"
import Layout from "../layout/layout";
import SearchBar from "../components/search-bar/search-bar";
import { useState } from "react";
import RestaurantsMap from "../components/restaurants-map/restautrants-map";
import { getCurrentDate, getCurrentTime } from "functions";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faLocation } from "@fortawesome/free-solid-svg-icons";
import { ThemeColor } from "data/const";
import RestaurantList from "components/restaurant-list/restaurant-list";

const Home = () => { 
    const [ date, setDate ] = useState(getCurrentDate()); 
    const [ time, setTime ] = useState(getCurrentTime());
    const [ address, setAddress ] = useState("");

    return (
        <Layout>
            <Logo/>
            <SearchBar setDate={setDate} setTime={setTime} setAddress={setAddress}/>
            <CurrentLocationIcon>
                <FontAwesomeIcon icon={faLocation} style={{color: ThemeColor.main, width: "80%", height: "80%"}}/>
            </CurrentLocationIcon>            
            <RestaurantsMap date={date} time={time} address={address}/>
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