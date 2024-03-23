import imgsRestaurant from '../../img/restaurant.jpg';
import {MapContainer, TileLayer, ZoomControl, Marker} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import {useState, useEffect, useCallback} from "react";
import {Icon} from "leaflet/src/layer";
import posIcon from "../../img/icon/pos.png";


export default function NamePlan() {

    const [map, setMap] = useState(null);

    const customIcon = new Icon({
        iconUrl : posIcon,
         iconSize : [48, 48],
     });

    return(
        <div className='NamePlan'>
            <div className='NamePlan-divImage'>
                <img src={imgsRestaurant} alt="" className='NamePlan-imgRestaurant'/>
            </div>
            <div className='NamePlan-divPlan'>
                <div>
                    <span>Plan</span>
                </div>
                <div className='NamePlan-plan'>
                    <MapContainer center={[49 , 2]} zoom={15} style={{ width: '350px', height: '250px' }} zoomControl={false} scrollWheelZoom={false} ref={setMap} dragging={false}>
                        <TileLayer
                            attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                            url={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YnVzaW5mbyIsImEiOiJjbDFrcHoxcHcwMnFtM2NvM3loazVyZXl6In0.wocFk3P8esUWaGVgqHHocA'}
                        />
                        <MarkerClusterGroup>
                                <Marker position={[49 , 2]} icon={customIcon}></Marker>
                        </MarkerClusterGroup>
                    </MapContainer>
                </div>
                <div className='NamePlan-divBtnPlan'>
                    <button className='NamePlan-btnPlan'>Voir sur Plan</button>
                </div>
            </div>
        </div>
    );
}