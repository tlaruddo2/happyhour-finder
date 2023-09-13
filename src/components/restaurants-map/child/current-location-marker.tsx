import { MarkerF } from "@react-google-maps/api";

interface CurrentLocationMarkerProps{
    lat: number,
    lng: number
}
const CurrentLocationMarker = ({ lat, lng }: CurrentLocationMarkerProps) => 
        <MarkerF position={{ lat: lat, lng: lng }}/> 

export default CurrentLocationMarker;