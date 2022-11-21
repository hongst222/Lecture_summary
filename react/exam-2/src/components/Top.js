import React, { useRef, useCallback, memo, useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";


const Top = memo(() => {
    // 페이지 강제 이동을 위한 navigate
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const ss = pathname.substring(pathname.lastIndexOf("/")+1);
    /** state */

    const [date, setDate] = useState([]);

    
    /** 날짜 선택을 제한 */
    // ref
    const standard = useRef();
    const frontStandard = useRef();

    // 날짜 범위 첫 값 선택 시
    const onChageFirst = useCallback(e => {
        standard.current.setAttribute('min', e.currentTarget.value);
    }, []);
    // 날짜 범위 마지막 값 선택 시
    const onChangeSecond = useCallback(e => {
        frontStandard.current.setAttribute('max', e.currentTarget.value);
    }, [])

    /** form submit 이벤트 */
    const onSubmitDate = useCallback(e => {

        e.preventDefault();
        // 범위 값이 모두 선택되지 않으면 알림 문구
        if (!e.currentTarget.gte.value || !e.currentTarget.lte.value) {
            alert('기간을 설정해주세요');
            return;
        }

        const current = e.currentTarget;
        // YYYY-MM-DD 형태로 바꿔서 queryString에 넣어줌
        const confirmed_gte = dayjs(current.gte.value).format('YYYY-MM-DD');
        const confirmed_lte = dayjs(current.lte.value).add(1, 'day').format('YYYY-MM-DD');
        setDate([
            confirmed_gte,
            current.lte.value
        ]);
        navigate(`/covid19/confirmed?confirmed_gte=${confirmed_gte}&confirmed_lte=${confirmed_lte}`);

    }, []);
    return (
        <div >
            <h1>Covid19 현황 {
                date.length != 0 && (`(${date[0]}~${date[1]})`)
            }</h1>
            <form onSubmit={onSubmitDate}>
                <input type="date" name='gte' min="2022-02-17" max="2022-05-31" onChange={onChageFirst} defaultValue={date[0]} ref={frontStandard} />

                <input type="date" name='lte' min="2022-02-17" max="2022-05-31" onChange={onChangeSecond} defaultValue={date[1]} ref={standard} />


                <button type="submit">검색하기</button>
            </form>
        </div>
    );
});

export default Top;