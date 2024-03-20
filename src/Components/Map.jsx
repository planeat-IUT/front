import {MapContainer, TileLayer, ZoomControl, Marker} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import {useState, useEffect, useCallback} from "react";
import {Icon} from "leaflet/src/layer";
import posIcon from "../img/icon/pos.png";

export default function Map({position, zoom, restaurants, Clicked}) {

    const [map, setMap] = useState(null);

    const customIcon = new Icon({
       iconUrl : posIcon,
        iconSize : [48, 48],
    });

    const onClick = useCallback((lat, lng, zoom) => {
        map.setView(lat, lng, zoom)
    },[map]);

    useEffect(() => {
        console.log(position)
        console.log('lat : ' + position[0]);
        console.log('long : ' + position[1]);
    })

    return (
        <div>
            <MapContainer center={[position[0], position[1]]} zoom={zoom} ref={setMap}>
                <TileLayer
                    attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                    url={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YnVzaW5mbyIsImEiOiJjbDFrcHoxcHcwMnFtM2NvM3loazVyZXl6In0.wocFk3P8esUWaGVgqHHocA'}
                />
                <MarkerClusterGroup>
                    {restaurants.map((restaurant, index) => (
                            <Marker position={[restaurant.lat, restaurant.long]} eventHandlers={{
                                click: () => {
                                    //onClick(restaurant.lat, restaurant.long, 13);
                                    Clicked(restaurant);
                                },

                            }} icon={customIcon}>

                            </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>

            </div>
    );
}