import React from 'react'
import { useParams } from 'react-router-dom';

const Weather = () => {

    console.clear();

    const params = useParams();

    const weatherList = {
        "mon": ["맑음", "맑음"],
        "tue": ["비", "맑음"],
        "wed": ["맑음", "흐림"],
        "thu": ["맑음", "흐림"],
        "fri": ["흐림", "흐림"],
        "sat": ["비", "맑음"],
        "sun": ["맑음", "맑음"],
    }

    const day = params.day;
    const days = Object.keys(weatherList);
    const korDays = ['월','화','수','목','금','토','일']
    const index = days.indexOf(day)
    if(!weatherList[day]) {
        return (<h2>요일을 선택해주세요.</h2>);
    }
    return (
        <div>
            <h2>{korDays[index]}요일</h2>
            <hr />
            <h2>오전</h2>
            <p>{weatherList[day][0]}</p>
            <h2>오후</h2>
            <p>{weatherList[day][1]}</p>
        </div>
    );
};

export default Weather