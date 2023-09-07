import TimePicker from "../components/search-bar/time-picker/time-picker"
import Logo from "../components/logo/logo"
import Layout from "../layout/layout";
import SearchBar from "../components/search-bar/search-bar";
import CurrentTime from "../components/current-time/current-time"
import RestaurantsTable from "../components/restaurants-table/restaurants-table"

const Home = () => { 
    return (
        <Layout>
            <Logo/>
            {/* <CurrentTime/> */}
            <SearchBar/>
            <RestaurantsTable/>
        </Layout>
    )
}

export default Home;