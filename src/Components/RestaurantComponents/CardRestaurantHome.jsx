import { useState } from 'react';
import imgsRestaurant from '../../img/restaurant.jpg';

export default function CardRestaurantHome() {
    const [showCard, setShowCard] = useState(false);

    return (

        <div id={"first-item"} className={"item-third-page"}
             onMouseOver={() => setShowCard(true)} onMouseLeave={() => setShowCard(false)}>
            <img src={imgsRestaurant} alt="Restaurant"/>
            {!showCard ? (

                <span className={"resto-name-home roboto-regular"}>
                    Nom du restaurant
                </span>

            ) : (
                <div className={"cont-card-third-page-actif roboto-regular"}>
                    <div className={"header-card-third-page"}>
                        <span className={"title-card-third-page"}>Nom du restaurant</span>
                        <span className={"note-card-third-page"}>Note</span>
                    </div>
                    <div className={"desc-card-third-page"}>
                        <span className={"desc-card-third-page"}>Description du restaurant</span>
                    </div>
                    <div className={"btn-card-third-page"}>
                        <a href={"/restaurants/"} className={"btn-card-third-page-redirect"}>voir le restaurant</a>
                    </div>
                </div>
            )}
        </div>

    );
}
