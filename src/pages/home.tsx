import Logo from "../components/logo/logo"
import Layout from "../layout/layout";
import SearchBar from "../components/search-bar/search-bar";
import RestaurantsTable from "../components/restaurants-table/restaurants-table"

const Home = () => { 
    return (
        <Layout>
            <Logo/>
            <SearchBar/>
            <RestaurantsTable/>
        </Layout>
    )
}

export default Home;