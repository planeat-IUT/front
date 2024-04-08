import NamePlan from "../Components/RestaurantDetails/NamePlan";
import Dish from "../Components/RestaurantDetails/Dish";
import {useState} from "react";

export default function Restaurant() {

    return (
        <div class="resturant">
            <div className>
                <NamePlan />
            </div>
            <div class="Dish">
                <Dish />
            </div>
        </div>

    );
}