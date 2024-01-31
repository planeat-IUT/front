import {useEffect, useState} from "react";

export default function Filter({checkFilter = [], typeButtons = [], checkDistance = []}){

    const [checkedRadio, setCheckedRadion] = useState();

    return (
        <>

            <div className={"main-cont-filter"}>
                <div className={"title-cont-filter"}>
                    <span>
                        Filtres
                    </span>
                </div>
                {checkFilter.length > 0 &&
                    <div className={"cont-check-filter-static cont-check-filter"}>
                        <div className={"Title-filter-cont"}>
                        <span>
                            Trier
                        </span>
                        </div>
                        <div className={"input-check-filter-cont"}>
                            {checkFilter.map((check, index) => (
                                <div>
                                    <input key={index} type={"radio"} className={"check-filter"} value={check}
                                           id={check} checked={checkedRadio === check}
                                           onClick={() => setCheckedRadion(check)}/>
                                    <label>
                                        {check}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {typeButtons.length > 0 &&
                    <div className={"cont-check-filter-scroll cont-check-filter"}>
                        <div className={"Title-filter-cont"}>
                            <span>
                                Type
                            </span>
                        </div>
                        <div className={"input-check-filter-cont"}>
                            {typeButtons.map((type, index) => (
                                <div>
                                    <input key={index} type={"checkbox"} className={"check-filter"}/>
                                    <label>
                                        {type}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {checkDistance.length > 0 &&
                <div className={"cont-check-filter-distance cont-check-filter"}>
                    <div className={"Title-filter-cont"}>
                        <span>
                            Distance
                        </span>
                    </div>
                    <div className={"input-check-filter-cont"}>
                        {checkDistance.map((type, index) => (
                            <div>
                                <input key={index} type={"radio"} className={"check-filter"}/>
                                <label>
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                }
            </div>
        </>
    )
        ;
}