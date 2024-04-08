import imgsdish from '../../img/plat.jpg';
import { useState } from "react";

export default function CardDish({ dishrant = [] }) {
    // Créez une liste de 9 éléments pour la boucle
    const entree = Array.from({ length: 9 }, (_, index) => index);
    const plat = Array.from({ length: 9 }, (_, index) => index);
    const dessert = Array.from({ length: 9 }, (_, index) => index);

    return (
        <div>
            <div class="menu-dish">
                <a href="#1">Entrées</a>
                <a href="#2">Plats</a>
                <a href="#3">Desserts</a>
                <div class="line"></div>
            </div>
            <div class="dish-list">
            <section id='1' className="dish-section">
            {entree.map((index) => (
                <div key={index} class="cont-card-dish">
                    <div class="img-card-dish">
                        <img src={imgsdish} alt="" />
                    </div>
                    <div class="cont-utils-card-dish">
                        <div class="txt-card-dish">
                            <span class="title-txt-card-dish">
                                Nom entrée
                            </span>
                            <span className={"desc-card-dish"}>
                                Un très bon plat. Ce plat est vraiment excellent prend le
                            </span>
                            <span className={"price-card-dish"}>
                                Prix : 21.90€
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            </section>

            <section id='2' className="dish-section">
            {plat.map((index) => (
                <div key={index} class="cont-card-dish">
                    <div class="img-card-dish">
                        <img src={imgsdish} alt="" />
                    </div>
                    <div class="cont-utils-card-dish">
                        <div class="txt-card-dish">
                            <span class="title-txt-card-dish">
                                Nom plat
                            </span>
                            <span className={"desc-card-dish"}>
                                Un très bon plat. Ce plat est vraiment excellent prend le
                            </span>
                            <span className={"price-card-dish"}>
                                Prix : 21.90€
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            </section>

            <section id='3' className="dish-section">
            {dessert.map((index) => (
                <div key={index} class="cont-card-dish">
                    <div class="img-card-dish">
                        <img src={imgsdish} alt="" />
                    </div>
                    <div class="cont-utils-card-dish">
                        <div class="txt-card-dish">
                            <span class="title-txt-card-dish">
                                Nom déssert
                            </span>
                            <span className={"desc-card-dish"}>
                                Un très bon plat. Ce plat est vraiment excellent prend le
                            </span>
                            <span className={"price-card-dish"}>
                                Prix : 21.90€
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            </section>
            </div>
            <div>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
}
