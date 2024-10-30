import { RestaurantType } from "state/types";
import { Container } from "./styled/sort-drop-down.styled"
import { RestaurantDetailedType } from "state/restaurants/restaurants-context";

interface Props{
    selectedRestaurantType: RestaurantType | 'All';
    setSelectedRestaurantType: React.Dispatch<React.SetStateAction<RestaurantType | 'All'>>;
    setSelectedRestaurantDetailedType: React.Dispatch<React.SetStateAction<RestaurantDetailedType | 'All'>>
}
export const SortDropDown: React.FC<Props> = ({ selectedRestaurantType, setSelectedRestaurantType, setSelectedRestaurantDetailedType }) => {
    const detailedPubType = ['Pub', 'CasualDining', 'FineDining', 'Seafood', 'SportsBar', 'BrewPub', 'Tapas', 'ViewBar', 'WineBar']
    const detailedDiningType = ['CasualDining', 'FineDining', 'Seafood', 'Latin', 'Asian', 'Pizza']

    return (
        <Container>
            <div>
                <label htmlFor="restaurantType">Pub or Dining</label>
                <select name="restaurantType" onChange={(e) => setSelectedRestaurantType(e.target.value as RestaurantType | 'All')}>
                    <option value="All">All</option>
                    <option value="Pub">Pub</option>
                    <option value="Dining">Dining</option>                
                </select>
            </div>
            { selectedRestaurantType !== 'All' && 
            <div>
                <label htmlFor="restaurantDetailedType">Select Types</label>
                <select name="restaurantDetailedType" onChange={(e) => setSelectedRestaurantDetailedType(e.target.value as RestaurantDetailedType | 'All')}>
                    <option value="all">All</option>
                    {selectedRestaurantType === "Pub" ?
                    detailedPubType.map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                    ))
                    :
                    detailedDiningType.map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                    ))
                    }
                </select>                
            </div>
            }
        </Container>
    )
}

// sort: distance, 