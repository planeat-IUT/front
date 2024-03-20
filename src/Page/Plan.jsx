import Map from "../Components/Map";
import Load from "../Components/Load";
import {useEffect, useState} from "react";
import CardPlan from "../Components/CardPlan";

export default function Plan() {

    const [position, setPosition] = useState([51.505, -0.09]);
    const [load, setLoad] = useState(false);
    const [restaurant, setRestaurant] = useState([]);
    const [showCard, setShowCard] = useState(false);

    useEffect( () => {
        if(load) return;
        if (navigator.geolocation) {
            console.log('geoloc ok');
            navigator.geolocation.getCurrentPosition((positionRes) => {
                setPosition([positionRes.coords.latitude, positionRes.coords.longitude]);
                setLoad(true);
                console.log(`position : ${position[0]}, ${position[1]}`);
                console.log('position ' + position)
            }, (error) => {
                setPosition([49.894067, 2.295753]);
                console.log('position bloqued' + position)
                setLoad(true);
            });
        }
    });

    const restaurantsClicked = (restaurant) => {
        console.log(restaurant.name);
        setRestaurant(restaurant);
        setShowCard(true);
    }

    const closeCard = () => {
        setShowCard(false);
    }

    if (position[0] !== 51.505 && position[1] !== -0.09 && showCard) {
        console.log('user position : ' + position);
        return (
            <>
                <Map position={position} zoom={13} Clicked={restaurantsClicked} restaurants={[{ "name": "Okinawa", "lat": "49.8943807836264", "long": "2.294316597075964" },{ "name": "Steak easy", "lat": "49.89448528978843", "long": "2.3044080052736833" },{ "name": "Le buzz", "lat": "49.894058645258355", "long": "2.2980293112894543" },{ "name": "The best food Amiens", "lat": "49.89580673879551", "long": "2.2932805299681127" },{ "name": "Spécialités Orientales & Cuisine Traditionnelle Picanordie", "lat": "49.89764342984512", "long": "2.287911903793485" },{ "name": "Lusitalia Amiens", "lat": "49.878827981103406", "long": "2.2687769998623684" },{ "name": "Burger king", "lat": "49.875813562927", "long": "2.2807176695072107" },{ "name": "Restaurant M DO EAT", "lat": "49.87506524579248", "long": "2.281981816123977" }]}/>
                <CardPlan restaurant={restaurant} closeCard={closeCard}/>
            </>
        );
    } else if (position[0] !== 51.505 && position[1] !== -0.09) {
        console.log('default position : ' + position);
        return (
            <Map position={position} zoom={13} Clicked={restaurantsClicked} restaurants={[{ "name": "Okinawa", "lat": "49.8943807836264", "long": "2.294316597075964" },{ "name": "Steak easy", "lat": "49.89448528978843", "long": "2.3044080052736833" },{ "name": "Le buzz", "lat": "49.894058645258355", "long": "2.2980293112894543" },{ "name": "The best food Amiens", "lat": "49.89580673879551", "long": "2.2932805299681127" },{ "name": "Spécialités Orientales & Cuisine Traditionnelle Picanordie", "lat": "49.89764342984512", "long": "2.287911903793485" },{ "name": "Lusitalia Amiens", "lat": "49.878827981103406", "long": "2.2687769998623684" },{ "name": "Burger king", "lat": "49.875813562927", "long": "2.2807176695072107" },{ "name": "Restaurant M DO EAT", "lat": "49.87506524579248", "long": "2.281981816123977" }]}/>
        );
    } else {
        return (
            <Load Message={"veuillez autoriser la géolocalisation pour une meilleure expèrience"}/>
        );
    }
}