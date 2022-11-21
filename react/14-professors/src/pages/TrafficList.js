import React, { memo, useEffect, useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getList } from "../slices/TrafficSlice";

import styled from "styled-components";

import { useQueryString } from "../hooks/useQueryString";
import { current } from "@reduxjs/toolkit";

const ControlContainer = styled.form`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;

  .control {
    margin-right: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
  }

  .clickable {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #06f2;
    }

    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;
const TrafficList = memo(() => {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.TrafficSlice);
    const [range, setRange] = useState([]);
    const [when, setWhen] = useState("전체");

    /** 드롭다운 범위 */
    useEffect(() => {
        const period = [];
        dispatch(getList()).then(result => {
            result.payload.forEach(v => {
                if (period.indexOf(v.year) < 0) period.push(v.year);
            });
            setRange(period);
        });
    }, []);

    /** 페이지 강제 이동 */
    const navigate = useNavigate();

    /** 드롭다운 change 이벤트 */
    const onSelectChangeYear = useCallback(e => {
        e.preventDefault();
        const currentValue = e.currentTarget.value;
        if (currentValue != "") {
            dispatch(getList({ year: currentValue }));
            setWhen(currentValue);
        } else {
            dispatch(getList());
            setWhen("전체");
        }
    }, []);
    /** 수정 리스너 */
    const onTrafficEditClick = useCallback(e => {
        e.preventDefault();
        const {id} = e.currentTarget.dataset;

        navigate(`/traffic_edit/${id}`);
    })
    /** 삭제 리스너 */
    const onTrafficItemDelete = useCallback(e => {
        e.preventDefault();

        const { id, year, month } = e.currentTarget.dataset;
        if (window.confirm(`${year}년 ${month}월 교통사고 데이터를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({ id: id }));
        }
    }, []);

    return (
        <>  
            <h2>Traffic Accident Data List({when})</h2>
            <Spinner loading={loading} />
            <ControlContainer>
            <select onChange={onSelectChangeYear} style={{ margin:"20px", width: '200px'}}>
                <option value="">---- 전체 데이터 ----</option>
                {
                    range[0] && range.sort((a, b) => a - b).map(v => {
                        return (
                            <option key={v + 100} value={v}>{v}년도</option>
                        );
                    })
                }
            </select>
            <NavLink to = '/traffic_add' className="control clickable">사고 정보 추가하기</NavLink>
            </ControlContainer>

            {
                error ? <ErrorView error={error} /> : (
                    data && data.length > 0 && (<Table>
                        <thead>
                            <tr>
                                <th>일련번호</th>
                                <th>연도</th>
                                <th>월</th>
                                <th>사고건 수</th>
                                <th>사망자 수</th>
                                <th>부상자 수</th>
                                <th>수정하기</th>
                                <th>삭제하기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(v2 => {
                                    return (
                                        <tr key={v2.id}>
                                            <td>{v2.id}</td>
                                            <td>
                                                <NavLink to={`/traffic_view/${v2.id}`}>{v2.year}년</NavLink>
                                                </td>
                                            <td>{v2.month}월</td>
                                            <td>{v2.accident}건</td>
                                            <td>{v2.death}명</td>
                                            <td>{v2.injury}명</td>
                                            <td>
                                                <button type="button" data-id={v2.id} data-year = {v2.year} data-month={v2.month} onClick={onTrafficEditClick}>
                                                    수정하기
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" data-id={v2.id} data-year = {v2.year} data-month={v2.month} onClick={onTrafficItemDelete}>
                                                    삭제하기
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan='3'>합계</th>
                                <th>
                                    {data.map((v,i) => v.accident).reduce((acc,cur) => acc+cur, 0).toLocaleString()}건
                                </th>
                                <th>
                                    {data.map((v,i) => v.death).reduce((acc,cur) => acc+cur, 0).toLocaleString()}건
                                </th>
                                <th>
                                    {data.map((v,i) => v.injury).reduce((acc,cur) => acc+cur, 0).toLocaleString()}건
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </Table>
                ))
            }
        </>
    );
});

export default TrafficList;