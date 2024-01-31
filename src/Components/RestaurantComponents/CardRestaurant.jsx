import imgsRestaurant from '../../img/restaurant.jpg'
import {useState} from "react";

export default function CardRestaurant({restaurant = []}) {

    const [fav , setFav] = useState(false);
    const [heartColor , setHeartColor] = useState('#F1F1F1');

    const changeColor = () => {
        setFav(!fav);
        if(fav){
            setHeartColor('#F1F1F1');
        }else{
            setHeartColor('#F89B9B');
        }
    }

    return(

        <div class="cont-card-restau">
            <div class="img-card-restau">
                <img src={imgsRestaurant} alt="" />
            </div>

                <div class="cont-utils-card-restau">
                    <div class="txt-card-restau">
                        <span class="title-txt-card-restau">
                            {restaurant.NOM}
                        </span>
                        <span className={"desc-card-restau"}>
                            {restaurant.DESCRIPTION}
                        </span>
                    </div>
                    <div className={"btn-card-restau"}>
                        <button className={"btn-card-restau"}>
                            <span className={"txt-btn-card-restau"}>
                                Réserver
                            </span>
                        </button>
                        <button>
                            <span class="txt-btn-card-restau">
                                Click'n Collect
                            </span>
                        </button>
                    </div>
                </div>
                <div class="control-card-restau">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => changeColor()}>
                        <ellipse cx="7.60976" cy="7.92683" rx="7.60976" ry="7.92683" fill={heartColor}/>
                        <ellipse cx="18.3902" cy="7.92683" rx="7.60976" ry="7.92683" fill={heartColor}/>
                        <path d="M25.989 8.31745C26.3826 13.7267 16.0744 23.4634 12.8607 23.4634C9.64703 23.4634 -0.382328 13.5464 0.0112661 8.31745C0.0112661 4.05265 9.64703 8.01916 12.8607 8.01916C16.0744 8.01916 25.989 4.05265 25.989 8.31745Z" fill={heartColor}/>
                    </svg>
                    <div class="note-control-card-restau">
                        <span class="note">
                            {restaurant.NOTE}
                        </span>
                        <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="10.7907" cy="16.0697" rx="10.7907" ry="9.67442" fill="#F1F1F1"/>
                            <ellipse cx="20.8372" cy="16.4419" rx="11.1628" ry="9.30233" fill="#F1F1F1"/>
                            <path d="M31.9925 17.5539C30.7197 34.6745 19.791 34.6745 15.8361 34.6745C11.8811 34.6745 2.26927 34.6745 0.0228304 17.5539C-0.604733 12.7711 11.8811 17.2167 15.8361 17.2167C19.791 17.2167 32.35 12.7453 31.9925 17.5539Z" fill="#F1F1F1"/>
                            <path d="M19.6009 1.13301C20.5415 1.51475 20.8044 2.83663 20.1882 4.08552C19.572 5.3344 16.7831 9.13178 15.8426 8.75004C14.902 8.3683 16.002 4.28422 16.7821 2.70311C17.3984 1.45423 18.6604 0.751269 19.6009 1.13301Z" fill="#F1F1F1"/>
                        </svg>
                    </div>
                </div>

        </div>
    );
}