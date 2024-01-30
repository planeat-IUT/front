import CardRestaurant from "../Components/CardRestaurant";

export default function Restaurants() {
    return (
        <CardRestaurant restaurant={{
            image: "/img/restaurant.jpg",
            name: "Restaurant 1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.",
            note: "4.5"
        }} />
    );
}