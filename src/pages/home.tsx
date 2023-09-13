import Logo from "../components/logo/logo"
import Layout from "../layout/layout";
import SearchBar from "../components/search-bar/search-bar";
import RestaurantsTable from "../components/restaurants-table/restaurants-table"
import { useState } from "react";
import ModeSwitch from "../components/mode-swich/mode-swich";
import RestaurantsMap from "../components/restaurants-map/restautrants-map";
import { getCurrentDate, getCurrentTime } from "functions";

const Home = () => { 
    const [ date, setDate ] = useState(getCurrentDate()); 
    const [ time, setTime ] = useState(getCurrentTime());
    const [ address, setAddress ] = useState("");

    const [ isTable, setTable ] = useState(false);

    return (
        <Layout>
            <Logo/>
            <SearchBar setDate={setDate} setTime={setTime} setAddress={setAddress}/>
            <ModeSwitch setTable={setTable}/>
            { isTable && <RestaurantsTable date={date} time={time} address={address}/>}
            { !isTable && <RestaurantsMap/>}
        </Layout>
    )
}

export default Home;