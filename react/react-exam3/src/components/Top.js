import React, { useRef, useCallback, memo, useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";


const Top = memo(() => {
    // 페이지 강제 이동을 위한 navigate
    const navigate = useNavigate();
    /** 페이지 강제이동에 사용됨 */
    const { pathname } = useLocation();
    const fieldName = pathname.substring(pathname.lastIndexOf("/") + 1);
    
    /** 선택 날짜 state */
    const [date, setDate] = useState([]);
    const qs = useQueryString();
    const qskeys = Object.keys(qs);
    useEffect(() => {
        const d1 = qs[qskeys[0]];
        const d2 = qskeys.length != 0 ? dayjs(qs[qskeys[1]]).add(-1,'day').format('YYYY-MM-DD') : false;
        setDate([ d1, d2]);
        console.log(pathname);
    },[]);
    
    
    /** 날짜 선택을 제한 */
    // ref
    const standard = useRef();
    const frontStandard = useRef();

    // 날짜 범위 첫 값 선택 시 
    // 뒤에 값 max제한
    const onChageFirst = useCallback(e => {
        standard.current.setAttribute('min', e.currentTarget.value);
    }, []);
    // 날짜 범위 마지막 값 선택 시
    // 앞에 값 min 제한
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
        const ngte = dayjs(current.gte.value).format('YYYY-MM-DD');
        const nlte = dayjs(current.lte.value).add(1, 'day').format('YYYY-MM-DD');
        setDate([
            ngte,
            current.lte.value
        ]);
        
        // fieldName이 covid19이면 confirmed가 파라미터가 되도록함.
        if(pathname !="/"){
            navigate(`/covid19/${fieldName}?date_gte=${ngte}&date_lte=${nlte}`);
        } else {
            navigate(`/covid19/confirmed?date_gte=${ngte}&date_lte=${nlte}`);
        }

    }, [fieldName]);
    return (
        <div >
            <h1>Covid19 현황 {
                qskeys.length != 0 && (`(${date[0]}~${date[1]})`)
            }</h1>
            <form onSubmit={onSubmitDate}>
                <input type="date" name='gte' min="2020-02-17" max="2022-05-31" onChange={onChageFirst} defaultValue={date[0]} ref={frontStandard} />
                ~<input type="date" name='lte' min="2020-02-17" max="2022-05-31" onChange={onChangeSecond} defaultValue={date[1]} ref={standard} />
                <button type="submit" style={{marginLeft: "7px", marginBottom: "10px"}}>검색</button>
            </form>
        </div>
    );
});

export default Top;