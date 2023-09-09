import Logo from "../components/logo/logo"
import Layout from "../layout/layout";
import SearchBar from "../components/search-bar/search-bar";
import RestaurantsTable from "../components/restaurants-table/restaurants-table"
import { useState } from "react";

const Home = () => { 
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");

    return (
        <Layout>
            <Logo/>
            <SearchBar setDate={setDate} setTime={setTime} setAddress={setAddress}/>
            <RestaurantsTable date={date} time={time} address={address}/>
        </Layout>
    )
}

export default Home;