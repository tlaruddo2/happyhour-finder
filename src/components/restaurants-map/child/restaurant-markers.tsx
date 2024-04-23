import { faBeerMugEmpty, faBowlFood, faGlobe, faMap, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InfoWindow, InfoWindowF, Marker, MarkerF } from "@react-google-maps/api";
import { restaurantSamples } from "entity/restaurant/restaurant"
import type { Restaurant } from "entity/restaurant/restaurant";
import { useState } from "react";
import styled from "styled-components";

const RestaurantMarkers = () => {
    const [selectedMarker, setSetlectedMarker] = useState<Restaurant | null>(null);

    const infoBoxOptions = {
        disableAutoPan: true,
        boxStyle: {
          border: 'none',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '5px',
        },
    };    

    return (
        <div>
            {restaurantSamples.map(( restaurant ) => {
                return (
                    <div key={restaurant.id}>
                        <MarkerF
                            position={{ lat: restaurant.lat, lng: restaurant.lng }}
                            options={{icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}}
                            onClick={()=>setSetlectedMarker(restaurant)}            
                            onLoad={()=>console.log(restaurant.name, " loaded")}
                        />
                    </div> 
            )})}    
            {selectedMarker && 
                <InfoWindowF 
                    position={{lat: selectedMarker.lat, lng: selectedMarker.lng}}
                    options={infoBoxOptions}
                    onCloseClick={()=> setSetlectedMarker(null)}
                >
                    <div style={{width:"300px", height: "100px", display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                            <h4 style={{margin: "0"}}>Momo Sushi</h4>
                            <div style={{display: "flex", height: "100%", width: "50%", alignItems: "middle", justifyContent: "end"}}>
                                <div style={{display: "flex", height: "100%", width: "40%", alignItems: "center", borderRadius: "10px", backgroundColor: "#FFD700", color: "white", justifyContent: "center", fontWeight: 800, marginRight: "2px", fontSize: "10px",}}>
                                    Happy Hour
                                </div>                                
                                <div style={{display: "flex", height: "100%", width: "40%", alignItems: "center", borderRadius: "10px", backgroundColor: "#FF6347", color: "white", justifyContent: "center", fontWeight: 800, paddingRight: "2px", fontSize: "10px"}}>
                                    Promotion
                                </div>  
                            </div>

                        </div>
                        <div>Modern Japanese Restaurant</div>
                        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div>Sushi</div>
                                    <div>$100</div>
                                    <div>Sushi</div>
                                    <div>$100</div>                                    
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div>Udon</div>
                                    <div>$50</div>
                                </div>                                
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div>Udon</div>
                                    <div>$50</div>
                                </div>                                
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <div>Udon</div>
                                    <div>$50</div>
                                </div>                                
                            </div>
                            <div style={{display:"flex"}}>
                                <a target="_blank" href="https://www.naver.com" style={{marginRight: "0.5em", height: "2em", width: "2em"}}>
                                    <FontAwesomeIcon icon={faGlobe} style={{height: "100%", width: "100%"}}/>
                                </a>
                                <a target="_blank" href="https://www.naver.com" style={{marginRight: "2px", height: "2em", width: "2em"}}>
                                    <FontAwesomeIcon icon={faGlobe} style={{height: "100%", width: "100%"}}/>
                                </a>
                            </div>
                        </div>
                        <div style={{display: "flex", width: "100%", justifyContent: "end", fontSize: "10px"}}>Last Confrimed: Dec 8, 2023</div>
                    </div>
                </InfoWindowF>
            }
        </div>
    )
}

export default RestaurantMarkers;