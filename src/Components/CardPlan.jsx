import {useEffect, useState} from "react";

export default function CardPlan({restaurant,  closeCard}) {

    const [load, setLoad]  = useState(false);

    useEffect(() => {

        console.log(restaurant);

    }, [restaurant]);

    return(
        <div className={"card-cont-plan"}>
            {restaurant.name}
            <button onClick={closeCard}>X</button>
        </div>
    );
}