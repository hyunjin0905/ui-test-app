import  React, { FC } from "react";
import { RandomFoodRaffle, RandomFoodRoulette } from "../../food";




export const Food = () => {
    return (
        <div className="food">
            <RandomFoodRaffle/>
            <RandomFoodRoulette title="베스트 메뉴 Top10 룰렛"/>
        </div>
    )
}