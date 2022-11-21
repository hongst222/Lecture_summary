import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, deleteItem, gteItem, getItem } from '../slices/TrafficSlice';

import Spinner from '../components/Spinner';
import Table from '../components/Table';
import ErrorView from '../components/ErrorView';

const TrafficView = memo(() => {
    const { id } = useParams();

    /** 리덕스 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.TrafficSlice);

    /** 렌더링 시 데이터 가져오기 */
    useEffect(() => {
        dispatch(getItem({ id: id }));
    }, []);

    /** 데이터 값 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
        if (data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({ id: id }));
        }
    }, [data]);

    /** 페이지 강제 이동을 위한 navigate */
    const navigate = useNavigate();

    /** 삭제 클릭 이벤트 리스너 */
    const onTrafficItemDelete = useCallback(e => {
        e.preventDefault();
        const current = e.currentTarget;
        const { id, year, month } = current.dataset;

        if (window.confirm(`일련번호 ${id}번 ${year}년 ${month}월의 교통사고 데이터를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            })).then(({ meta, payload }) => {
                navigate('/traffic');
            });
        }
    }, []);

    const onTrafficEdit = useCallback(e => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/traffic_edit/${id}`);
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (

                item && (
                    <div>
                        <Table>
                            <colgroup>
                                <col width='120' />
                                <col />
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th>일련번호</th>
                                    <td>{item.id}번</td>
                                </tr>
                                <tr>
                                    <th>연도</th>
                                    <td>{item.year}년</td>
                                </tr>
                                <tr>
                                    <th>월</th>
                                    <td>{item.month}월</td>
                                </tr>
                                <tr>
                                    <th>교통사고 수</th>
                                    <td>{item.accident}건</td>
                                </tr>
                                <tr>
                                    <th>사망자 수</th>
                                    <td>{item.death}명</td>
                                </tr>
                                <tr>
                                    <th>부상자 수</th>
                                    <td>{item.injury}명</td>
                                </tr>


                            </tbody>
                        </Table>
                        <div style={{ textAlign: 'center' }}>
                            <NavLink to="/traffic">목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/traffic_add">등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/traffic_edit" data-id={item.id} onClick={onTrafficEdit}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/traffic/#!" data-id={item.id} data-year={item.year} data-month={item.month} onClick={onTrafficItemDelete}>삭제</NavLink>
                        </div>
                    </div>
                )
            )}

        </div>
    );
});

export default TrafficView;