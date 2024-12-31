import { MarkerF, MarkerClusterer } from "@react-google-maps/api";
import { useRestaurantContext } from "state/store";
import type { Restaurant, RestaurantType } from "state/types";
import { useCallback, useEffect, useState } from 'react';

interface Props {
    selectedRestaurant: Restaurant | null;
    setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
}

const RestaurantMarkers: React.FC<Props> = ({ selectedRestaurant, setSelectedRestaurant }) => {
    const restaurants = useRestaurantContext().restaurants;
    const [isClustererReady, setIsClustererReady] = useState(false);

    useEffect(() => {
        // Delay the clusterer initialization slightly
        const timer = setTimeout(() => {
            setIsClustererReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const onClusteringLoad = useCallback((clusterer: any) => {
        console.log("Clustering loaded successfully");
    }, []);

    const iconUrls: Record<RestaurantType | "default", string> = {
        Dining: "https://cdn-icons-png.freepik.com/512/8280/8280802.png",
        Pub: "https://png.pngtree.com/png-vector/20190527/ourlarge/pngtree-beer-icon-png-image_1105732.jpg",
        default: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    };

    const returnMarkerIcon = (restaurantType: RestaurantType): google.maps.Icon => {
        const iconUrl = iconUrls[restaurantType] || iconUrls.default;

        return {
            url: iconUrl,
            anchor: new google.maps.Point(0, 32),
            scaledSize: new google.maps.Size(20, 32)
        };
    };

    if (!isClustererReady) return null;

    return (
        <MarkerClusterer
            options={{
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                gridSize: 60,
                minimumClusterSize: 2,
                averageCenter: true,
            }}
            onLoad={onClusteringLoad}
        >
            {(clusterer) => (
                <>
                    {restaurants.map((restaurant) => (
                        <MarkerF
                            key={restaurant.id}
                            position={{ lat: restaurant.lat, lng: restaurant.lng }}
                            options={{ icon: returnMarkerIcon(restaurant.type) }}
                            onClick={() => setSelectedRestaurant(restaurant)}
                            clusterer={clusterer}
                        />
                    ))}
                </>
            )}
        </MarkerClusterer>
    );
};

export default RestaurantMarkers;
