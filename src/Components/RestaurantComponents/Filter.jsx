import {useEffect, useState} from "react";

export default function Filter({checkFilter = [], typeButtons = [], checkDistance = []}){

    const [checkedRadio, setCheckedRadion] = useState();
    const [distance, setDistance] = useState();

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
                    <div className={"input-check-filter-cont input-check-filter-cont-dist"}>
                        {checkDistance.map((dist, index) => (
                            <div className={"radio-dist"}>
                                <input key={index}
                                       type={"radio"}
                                       className={"check-filter"}
                                       value={dist} checked={distance === dist}
                                       onClick={() => setDistance(dist)}
                                />
                                {index !== checkDistance.length - 1 &&
                                    <div className={"line-dist"}></div>
                                }
                            </div>
                        ))}
                    </div>
                    <div className={"radio-dist-span-list"}>
                        {checkDistance.map((dist, index) => (
                            <div className={"radio-dist-span"}>
                                    <span>
                                        {dist} km
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
                }
            </div>
        </>
    )
        ;
}