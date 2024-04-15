import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ReservationComponent() {

    const [value, onChange] = useState(new Date());
    const [active, setActive] = useState(0);
    const [timeSlots, setTimeSlots] = useState([]);

    // Génération des tranches horaires
    useState(() => {
        const slots = [];
        for (let hour = 19; hour <= 22; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                slots.push(<div key={time}>{time}</div>);
            }
        }
        setTimeSlots(slots);
    }, []);

    function NextClicked(){
        console.log(active);
        setActive(active + 1);
    }

    function PrecedClicked(){
        console.log(active);
        setActive(active - 1);
    }

    function PeopleClicked(id){
        var peoples = document.getElementsByClassName("reserv-item-people");
        for (var i = 0; i < peoples.length; i++) {
            peoples[i].classList.remove("active-people");
        }
        console.log(id);
        var people = document.getElementById(id);
        people.classList.add("active-people");
    }

    function handleTimeSlotClick(timeSlot) {
        console.log(timeSlot);
    }

    return(
    <div className={"reserv-cont-main"}>
        <div className={"reserv-title roboto-regular"}>
            <span>Réservation</span>
        </div>
        <div id={"reserv-header-control"} className={"reserv-cont-header"}>
            <div className={"reserv-header-control reserv-control-activ"}>
                <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.41667 28C2.41667 28 0 28 0 25.6667C0 23.3333 2.41667 16.3333 14.5 16.3333C26.5833 16.3333 29 23.3333 29 25.6667C29 28 26.5833 28 26.5833 28H2.41667ZM14.5 14C16.4228 14 18.2669 13.2625 19.6265 11.9497C20.9862 10.637 21.75 8.85652 21.75 7C21.75 5.14348 20.9862 3.36301 19.6265 2.05025C18.2669 0.737498 16.4228 0 14.5 0C12.5772 0 10.7331 0.737498 9.37348 2.05025C8.01384 3.36301 7.25 5.14348 7.25 7C7.25 8.85652 8.01384 10.637 9.37348 11.9497C10.7331 13.2625 12.5772 14 14.5 14Z"
                        fill="#534B35"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M32.5 5C32.7917 5 33.0715 5.1475 33.2778 5.41005C33.4841 5.6726 33.6 6.0287 33.6 6.4V10.6H36.9C37.1917 10.6 37.4715 10.7475 37.6778 11.0101C37.8841 11.2726 38 11.6287 38 12C38 12.3713 37.8841 12.7274 37.6778 12.9899C37.4715 13.2525 37.1917 13.4 36.9 13.4H33.6V17.6C33.6 17.9713 33.4841 18.3274 33.2778 18.59C33.0715 18.8525 32.7917 19 32.5 19C32.2083 19 31.9285 18.8525 31.7222 18.59C31.5159 18.3274 31.4 17.9713 31.4 17.6V13.4H28.1C27.8083 13.4 27.5285 13.2525 27.3222 12.9899C27.1159 12.7274 27 12.3713 27 12C27 11.6287 27.1159 11.2726 27.3222 11.0101C27.5285 10.7475 27.8083 10.6 28.1 10.6H31.4V6.4C31.4 6.0287 31.5159 5.6726 31.7222 5.41005C31.9285 5.1475 32.2083 5 32.5 5Z"
                          fill="#534B35"/>
                </svg>
            </div>
            <div id={"reserv-header-control"} className={"reserv-header-control"}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1485_22)">
                        <path
                            d="M7 0.875C7 0.642936 6.90781 0.420376 6.74372 0.256282C6.57962 0.0921873 6.35706 0 6.125 0C5.89294 0 5.67038 0.0921873 5.50628 0.256282C5.34219 0.420376 5.25 0.642936 5.25 0.875V1.75H3.5C2.57174 1.75 1.6815 2.11875 1.02513 2.77513C0.368749 3.4315 0 4.32174 0 5.25L0 7H28V5.25C28 4.32174 27.6313 3.4315 26.9749 2.77513C26.3185 2.11875 25.4283 1.75 24.5 1.75H22.75V0.875C22.75 0.642936 22.6578 0.420376 22.4937 0.256282C22.3296 0.0921873 22.1071 0 21.875 0C21.6429 0 21.4204 0.0921873 21.2563 0.256282C21.0922 0.420376 21 0.642936 21 0.875V1.75H7V0.875ZM16.4535 17.9305C17.5473 17.9305 18.5255 17.0835 18.5255 15.8655C18.5255 14.4095 17.6032 13.713 16.4955 13.713C15.47 13.713 14.4515 14.3902 14.4515 15.8305C14.4515 17.2602 15.4018 17.9305 16.4535 17.9305Z"
                            fill="#534B35"/>
                        <path
                            d="M28 24.5V8.75H0V24.5C0 25.4283 0.368749 26.3185 1.02513 26.9749C1.6815 27.6313 2.57174 28 3.5 28H24.5C25.4283 28 26.3185 27.6313 26.9749 26.9749C27.6313 26.3185 28 25.4283 28 24.5ZM16.338 22.3825C14.3955 22.3825 13.44 21.0403 13.3577 19.9203H14.553C14.6282 20.5678 15.2302 21.3553 16.3922 21.3553C17.8692 21.3553 18.669 19.8712 18.676 17.5682H18.6288C18.361 18.2927 17.514 18.9508 16.2085 18.9508C14.7175 18.9508 13.2755 17.8832 13.2755 15.8533C13.2755 13.8635 14.7998 12.6875 16.4203 12.6875C18.4713 12.6875 19.838 13.972 19.838 17.3565C19.838 20.5153 18.5395 22.3807 16.338 22.3807V22.3825ZM11.2805 12.8713V22.2023H10.0975V14.1383H10.0765C9.569 14.4113 8.53125 15.0482 7.875 15.498V14.28C8.6124 13.7654 9.37967 13.295 10.1728 12.8713H11.2805Z"
                            fill="#534B35"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1485_22">
                            <rect width="28" height="28" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div id={"reserv-header-control"} className={"reserv-header-control"}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1485_25)">
                        <path
                            d="M28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.10051 23.8995C1.475 21.274 0 17.713 0 14C0 10.287 1.475 6.72601 4.10051 4.10051C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.10051C26.525 6.72601 28 10.287 28 14ZM14 6.125C14 5.89294 13.9078 5.67038 13.7437 5.50628C13.5796 5.34219 13.3571 5.25 13.125 5.25C12.8929 5.25 12.6704 5.34219 12.5063 5.50628C12.3422 5.67038 12.25 5.89294 12.25 6.125V15.75C12.25 15.9042 12.2909 16.0557 12.3683 16.1891C12.4458 16.3225 12.5571 16.433 12.691 16.5095L18.816 20.0095C19.017 20.1181 19.2525 20.1438 19.4722 20.0811C19.6919 20.0184 19.8784 19.8722 19.9917 19.6738C20.1051 19.4755 20.1364 19.2406 20.0789 19.0195C20.0214 18.7984 19.8796 18.6085 19.684 18.4905L14 15.2425V6.125Z"
                            fill="#534B35"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1485_25">
                            <rect width="28" height="28" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div className={"reserv-cont-choices"}>
            {active === 0 && (
                <div className={"reserv-cont-people"} onClick={() => setActive(0)}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <div key={index + 1} className={"reserv-item-people roboto-medium"} onClick={()=> PeopleClicked(index+1) } id={index+1}>
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.41667 28C2.41667 28 0 28 0 25.6667C0 23.3333 2.41667 16.3333 14.5 16.3333C26.5833 16.3333 29 23.3333 29 25.6667C29 28 26.5833 28 26.5833 28H2.41667ZM14.5 14C16.4228 14 18.2669 13.2625 19.6265 11.9497C20.9862 10.637 21.75 8.85651 21.75 7C21.75 5.14348 20.9862 3.36301 19.6265 2.05025C18.2669 0.737498 16.4228 0 14.5 0C12.5772 0 10.7331 0.737498 9.37348 2.05025C8.01384 3.36301 7.25 5.14348 7.25 7C7.25 8.85651 8.01384 10.637 9.37348 11.9497C10.7331 13.2625 12.5772 14 14.5 14Z"
                                    fill="#534B35"/>
                            </svg>
                            <span>{index + 1}</span>
                        </div>
                    ))}
                </div>
            )}

            {active === 2 && (
                <div className={"reserv-cont-time"}>
                    {timeSlots.map((timeSlot) => (
                            <div key={timeSlot.key} className={"reserv-item-time"} onClick={() => handleTimeSlotClick(timeSlot)}>
                                <span>
                                    {timeSlot}
                                </span>
                            </div>
                        ))}
                </div>
            )}
            {active === 1 && (
                <div className={"reserv-cont-calendar"} hidden={active !== 1}>
                    <Calendar onChange={onChange} value={value}/>
                </div>
            )}
        </div>
        <div className={"reserv-cont-btn"}>
            {active === 0 && (
                <div></div>
            )}
            {active > 0 && active <= 2 && (
                <>
                <div className={"reserv-btn-next"} onClick={() => setActive(active - 1)}>
                    <span>
                        Précédent
                    </span>
                </div>
                </>
            )}
            {active <= 1 && (
                <div className={"reserv-btn-next"} onClick={() => NextClicked()}>
                <span>
                    Suivant
                </span>
                </div>
            )}
            {active === 2 && (
                <div className={"reserv-btn-next"} onClick={() => NextClicked()}>
                <span>
                    Valider
                </span>
                </div>
            )}
        </div>
    </div>
    );
}