import React, { memo, useEffect } from 'react';
import { useQueryString } from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import LineChartView from '../components/LineChartView';
import MenuLink from '../components/MenuLink';


const Covid19 = memo(() => {
    const period = useQueryString();
    const periodKey = Object.keys(period);
    const low = period[periodKey[0]];
    const high = period[periodKey[1]];
    const eng = ["confirmed", "confirmed_acc", "active", "released", "released_acc", "death", "death_acc"];
    const kor = ["일일확진자", "누적확진자", "격리환자", "격리해제", "누적격리해제", "사망자", "누적사망자"];

    return (
        <>
            
            {
                eng.map((v, idx) => {
                    return (
                        <MenuLink
                            children={kor[idx]}
                            to={`/covid19/${v}?date_gte=${low}&date_lte=${high}`}
                            key={idx} />
                    )
                })
            }
            < LineChartView />
                     


        </>
    );
});


export default Covid19;

