import CardRestaurant from "../Components/RestaurantComponents/CardRestaurant";
import Filter from "../Components/RestaurantComponents/Filter";
import {useState} from "react";

export default function Restaurants() {

    const [restaurants, setRestaurants] = useState([
        {
            "ID_RESTAURANT": 1,
            "NOM": "Okinawa",
            "DESCRIPTION": "Découvrez l'harmonie parfaite entre la cuisine japonaise traditionnelle et la créativité moderne à Okinawa. Des sushis exquis aux plats chauds délicieusement préparés, une expérience culinaire inoubliable vous attend.",
            "ADRESSE": "7 Rue Léon Blum",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 91079312400017,
            "long": 2.294316597075964,
            "lat": 49.8943807836264,
            "MAIL": "okinawa@gpadmail.fr",
            "TEL": "0322093206",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 10,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null,
            "NOTE": 5,
            "FAVORIS": true
        },
        {
            "ID_RESTAURANT": 2,
            "NOM": "Steak easy",
            "DESCRIPTION": "Steak easy vous invite à une expérience gastronomique exceptionnelle avec des steaks succulents et des plats préparés avec soin. Détendez-vous dans une atmosphère chaleureuse et dégustez la perfection culinaire à chaque bouchée.",
            "ADRESSE": "18 Rue de Metz l'Évêque",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 52814435500021,
            "long": 2.3044080052736833,
            "lat": 49.89448528978843,
            "MAIL": "steakeasy@gpadmail.fr",
            "TEL": "0322914838",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 75,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null,
            "NOTE": 4
        },
        {
            "ID_RESTAURANT": 3,
            "NOM": "Le buzz",
            "DESCRIPTION": "Le buzz est l'endroit idéal pour vivre une expérience culinaire unique avec des plats innovants et des saveurs audacieuses. Laissez-vous emporter par l'ambiance vibrante et les délices gastronomiques.",
            "ADRESSE": "3 Rue des Sergents",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 48778360700038,
            "long": 2.2980293112894543,
            "lat": 49.894058645258355,
            "MAIL": "lebuzz@gpadmail.fr",
            "TEL": "0322807621",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 104,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null
        },
        {
            "ID_RESTAURANT": 4,
            "NOM": "The best food Amiens",
            "DESCRIPTION": "The best food Amiens vous propose une cuisine exceptionnelle préparée avec des ingrédients frais et de qualité. Détendez-vous dans un cadre élégant et savourez des plats qui éveilleront vos papilles.",
            "ADRESSE": "23 Rue du Général Leclerc",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 49365161600010,
            "long": 2.2932805299681127,
            "lat": 49.89580673879551,
            "MAIL": "thebestfoodamiens@gpadmail.fr",
            "TEL": "0950770672",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 4,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null
        },
        {
            "ID_RESTAURANT": 5,
            "NOM": "Spécialités Orientales & Cuisine Traditionnelle Picanordie",
            "DESCRIPTION": "Plongez dans une aventure culinaire avec les saveurs uniques de l'Orient et la cuisine traditionnelle picanordie chez Spécialités Orientales & Cuisine Traditionnelle Picanordie. Une fusion de délices qui émerveillera votre palais.",
            "ADRESSE": "2 Rue Jean Jaurès",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": "000",
            "long": 2.287911903793485,
            "lat": 49.89764342984512,
            "MAIL": "trucorientallenomesttrolon@gpadmail.fr",
            "TEL": "0651963918",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 178,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null,
            "NOTE": 2.5
        },
        {
            "ID_RESTAURANT": 6,
            "NOM": "Lusitalia Amiens",
            "DESCRIPTION": "Lusitalia Amiens vous invite à découvrir la richesse des saveurs italiennes dans une atmosphère conviviale. Des plats traditionnels aux créations modernes, un voyage gustatif vous attend chez Lusitalia Amiens.",
            "ADRESSE": "52 Bd Ambroise Paré",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 91079314561017,
            "long": 2.2687769998623684,
            "lat": 49.878827981103406,
            "MAIL": "lusitalia@gpadmail.fr",
            "TEL": "0322485086",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 48,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null
        },
        {
            "ID_RESTAURANT": 7,
            "NOM": "Burger king",
            "DESCRIPTION": "Burger king vous propose l'expérience ultime du burger avec des saveurs inégalées et des ingrédients de qualité supérieure. Dégustez des burgers juteux et des accompagnements délicieux chez Burger king.",
            "ADRESSE": "Angle, Av. Paul Claudel",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 91047582400017,
            "long": 2.2807176695072107,
            "lat": 49.875813562927,
            "MAIL": "bk@gpadmail.fr",
            "TEL": "0322950286",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 851,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null,
            "NOTE": 3.5
        },
        {
            "ID_RESTAURANT": 8,
            "NOM": "Restaurant M DO EAT",
            "DESCRIPTION": "Restaurant M DO EAT vous offre une expérience culinaire unique avec une sélection de plats créatifs et savoureux. Découvrez des saveurs uniques dans une ambiance chaleureuse chez Restaurant M DO EAT.",
            "ADRESSE": "Rue Alexandre Dumas",
            "COMPLEMENT": null,
            "CODE_POSTAL": 80000,
            "SIRET": 91079312455587,
            "long": 2.281981816123977,
            "lat": 49.87506524579248,
            "MAIL": "trucbizarrederwan@gpadmail.fr",
            "TEL": "0322446368",
            "RIB": "FR0000000",
            "IBAN": "FR00000",
            "LOGO": null,
            "NB_TABLE": 2,
            "ID_UTILISATEUR": 1,
            "A_DECOUVRIR": null,
            "NOTE": 0.5
        }
    ]);

    return (
        <div className={"cont-restaurant"}>
            <Filter checkFilter={["Favoris","A découvrir","Note", "Click'n Collect"]} typeButtons={["Rapide","Famillial","Mondiale"]} checkDistance={["5","10","20"]}/>
            <div className={"cont-card-restaurant"}>
                {restaurants.map((restaurant, index) => (

                    <CardRestaurant restaurant={restaurant}/>

                ))}
            </div>

        </div>

    );
}