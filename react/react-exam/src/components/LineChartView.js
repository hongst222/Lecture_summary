import React, { memo } from 'react';
import styled from 'styled-components';
import { cloneDeep } from 'lodash';

import {
    // 공통 항목들
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    // 선 그래프 및 산점도 그래프 전용
    LineElement
    
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
    LineElement
);
 const PlotContainer = styled.div`
 width: 96%;
 padding: 20px;
 box-sizing: border-box;
 height: 1000px;
`;


/**
 * 
 * id
 * date
 * active
 * confirmed_acc
 * death_acc
 * released_acc
 * confirmed
 * death
 * released
 */

const LineChartView = memo((data2, category, range1, range2 ) => {

    // 그래프 기본 옵션
    const defaultOption = {
        responsive: true,
        maintainAspectRation: false,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };

    const covid19 = {
        labels: ['06/18', '06/19', '06/20', '06/21', '06/22', '06/23', '06/14'],
        datasets: [{
            label: '서울시 확진자',
            data: [1237, 1108, 719, 2042, 1775, 1580, 1605],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '인천시 확진자',
            data: [260, 278, 222, 481, 404, 372, 366],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    return (
        <div>
            선 그래프
            <PlotContainer>
                <h3>선 그래프</h3>
                <Line options={defaultOption} data={covid19} />
            </PlotContainer>
        </div>
    );
});

export default LineChartView;