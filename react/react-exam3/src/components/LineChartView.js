import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { getList } from '../slices/CovidSlice';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import ErrorView from "./ErrorView";
import Spinner from './Spinner';
import {
    // 공통 항목들
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 선 그래프 및 산점도 그래프 전용
    LineElement,
    PointElement

} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
    // 공통 항목들
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 선 그래프 전용
    LineElement,
    PointElement
);
const PlotContainer = styled.div`
 width: 1300px;
 padding: 20px;
 margin: auto;
 box-sizing: border-box;
`;
const LineChartView = memo(() => {

    // 그래프 기본 옵션
    const defaultOption = {
        responsive: true,
        maintainAspectRation: false,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    /** 필드명 추출 */
    const { search, pathname } = useLocation();
    const fieldName = pathname.substring(pathname.lastIndexOf("/") + 1);
    const range = search;
    /** 리덕스 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.CovidSlice);
    /** 최초 마운트 시 리덕스를 통한 목록 조회 */
    useEffect(() => {
        console.log("데이터 범위 바뀜");
        dispatch(getList({
            range: range
        }));
    }, [range]);

    let fn = "";
    switch (fieldName) {
        case 'confirmed':
            fn = "일일확진자"
            break;
        case 'confirmed_acc':
            fn = "누적확진자"
            break;
        case 'released':
            fn = "격리해제"
            break;
        case 'released_acc':
            fn = "누적격리해제"
            break;
        case 'active':
            fn = "격리환자"
            break;
        case 'death':
            fn = "사망자"
            break;
        case 'death_acc':
            fn = "누적사망자"
            break;


    }

    return (
        <>
            <Spinner loading = {loading}/>
            {
                error? (
                    <ErrorView error ={error} />
                ) : (
                    data && data.length != 0 ? (

                        <PlotContainer>
                            <Line
                                options={defaultOption} 
                                data={{
                                    labels: data.map(v => dayjs(v.date).format('MM/DD')),
                                    datasets: [{
                                        label: fn+" (명)",
                                        data: data.map(v => v[fieldName]),
                                        backgroundColor: 'rgba(0, 125, 255, 0.5)',
                                        borderColor: 'rgba(0, 125, 255, 1)',
                                        borderWidth: 1
                                    },]
                                }} />
                        </PlotContainer>
                    ) : (
                        <h3>데이터가 존재하지 않습니다.</h3>
                    )
                )
            }

        </>
    );
});

export default LineChartView;