import imgsdish from '../../img/plat.jpg';
import { useState } from "react";

export default function CardDish({}) {
    // Créez une liste de 9 éléments pour la boucle
    const entree = Array.from({ length: 9 }, (_, index) => index);
    const plat = Array.from({ length: 9 }, (_, index) => index);
    const dessert = Array.from({ length: 9 }, (_, index) => index);
    const [hoveredDish, setHoveredDish] = useState(null);

    const handleHover = (index) => {setHoveredDish(index);};

    return (
        <div>
            <div className="menu-dish">
                <a href="#1" className="section-on">Entrées</a>
                <a href="#2">Plats</a>
                <a href="#3">Desserts</a>
                <div className="line"></div>
            </div>
            <div className="dish-list">
                <section id='1' className="dish-section">
                {entree.map((index) => (
                        <div key={index} className={`cont-card-dish ${hoveredDish === index ? 'panier' : ''}`} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(null)}>
                            <div className="img-card-dish">
                                <img src={imgsdish} alt="" />
                            </div>
                            <div className="cont-utils-card-dish">
                                <div className="txt-card-dish">
                                    <span className="title-txt-card-dish">
                                        Nom entrée
                                    </span>
                                    <span className={"desc-card-dish"}>
                                        Un très bon plat. Ce plat est vraiment excellent prend le
                                    </span>
                                    <span className={"price-card-dish"}>
                                        Prix : 21.90€
                                    </span>
                                    {hoveredDish === index && (
                                        <button className="dish-panier-button">
                                            Ajouter au panier
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            <section id='2' className="dish-section">
            {plat.map((index) => (
                <div key={index} className={`cont-card-dish ${hoveredDish === index ? 'panier' : ''}`} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(null)}>
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
                            {hoveredDish === index && (
                                        <button className="dish-panier-button">
                                            Ajouter au panier
                                        </button>
                                    )}
                        </div>
                    </div>
                </div>
            ))}
            </section>

            <section id='3' className="dish-section">
            {dessert.map((index) => (
                <div key={index} className={`cont-card-dish ${hoveredDish === index ? 'panier' : ''}`} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(null)}>
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
                            {hoveredDish === index && (
                                        <button className="dish-panier-button">
                                            Ajouter au panier
                                        </button>
                                    )}
                        </div>
                    </div>
                </div>
            ))}
            </section>
            </div>
            <div className="div-dish-button">
                <button className="button-dish green"></button>
                <button className="button-dish yellow"></button>
                <button className="button-dish yellow"></button>
            </div>
        </div>
    );
}
