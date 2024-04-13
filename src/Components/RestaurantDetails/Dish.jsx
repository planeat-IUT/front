import imgsdish from '../../img/plat.jpg';
import { useState, useEffect } from "react";

export default function CardDish() {
    const entree = Array.from({ length: 9 }, (_, index) => index);
    const plat = Array.from({ length: 9 }, (_, index) => index);
    const dessert = Array.from({ length: 9 }, (_, index) => index);
    const [hoveredDish, setHoveredDish] = useState(null);
    const [activeSection, setActiveSection] = useState('1');
    var divDish;

    const handleHover = (index) => {
        setHoveredDish(index);
    };

    const handleScroll = () => {
        var currentScroll = divDish.scrollTop;
        var currentSection;
        var dishs = document.getElementsByClassName('dish-section');
        for (var i = 0; i < dishs.length; i++) { 
            var divPosition = dishs[i].offsetTop;
            if (divPosition - 100 < currentScroll) {
                currentSection = dishs[i];
            }
        }
        if (currentSection) {
            setActiveSection(currentSection.id);
            var links = document.querySelectorAll('.menu-dish a');
            links.forEach(link => link.classList.remove('section-on'));
            console.log(currentSection.id)
            var currentLink = document.querySelector('.menu-dish a[href="#' + currentSection.id + '"]');
            if (currentLink) {
                currentLink.classList.add('section-on');
            }
        }
    };

    useEffect(() => {
        divDish = document.getElementById('dish-list');
        divDish.addEventListener('scroll', handleScroll);
        return () => {
            divDish.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <div className="menu-dish">
                <a href="#1" >Entrées</a>
                <a href="#2" >Plats</a>
                <a href="#3" >Desserts</a>
                <div className="line"></div>
            </div>
            <div id="dish-list" className="dish-list">
                <section id='1' className="dish-section">
                    <div  className="dish-div-section">
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
                    </div>
                    <div className="line-section"></div>
                </section>

                <section id='2' className="dish-section">
                    <div className="dish-div-section">
                        {plat.map((index) => (
                            <div key={index} className={`cont-card-dish ${hoveredDish === index ? 'panier' : ''}`} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(null)}>
                                <div className="img-card-dish">
                                    <img src={imgsdish} alt="" />
                                </div>
                                <div className="cont-utils-card-dish">
                                    <div className="txt-card-dish">
                                        <span className="title-txt-card-dish">
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
                    </div>
                    <div className="line-section"></div>
                </section>

                <section id='3' className="dish-section">
                    <div className="dish-div-section">
                        {dessert.map((index) => (
                            <div key={index} className={`cont-card-dish ${hoveredDish === index ? 'panier' : ''}`} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(null)}>
                                <div className="img-card-dish">
                                    <img src={imgsdish} alt="" />
                                </div>
                                <div className="cont-utils-card-dish">
                                    <div className="txt-card-dish">
                                        <span className="title-txt-card-dish">
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
                    </div>
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
