import React, { memo, useCallback, useEffect, useMemo } from 'react';
/** 리덕스 사용 */
import { useSelector, useDispatch } from 'react-redux';

/** 파라미터, 네비게이터 사용 */
import { useParams, useNavigate } from 'react-router-dom';

/** 슬라이스 */
import { getItem, putItem, getCurrentData } from '../slices/TrafficSlice';

/** 컴포넌트 */
import Spinner from '../components/Spinner';
import TableEx from '../components/TableEx';
import ErrorView from '../components/ErrorView';


const TrafficEdit = memo(() => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.TrafficSlice);
    useEffect(() => {
        dispatch(getCurrentData());
    },[])
    /** Traffic 데이터 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
        if (data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({ id: id }));
        }
    }, [data]);

    const navigate = useNavigate();

    const onSubmitEdit = useCallback(e => {
        e.preventDefault();
        const current = e.currentTarget;

        dispatch(putItem({
            id: current.id.value,
            year: current.year.value,
            month: current.month.value,
            accident: current.accident.value,
            death: current.death.value,
            injury: current.injury.value
        })).then((result) => {
            navigate(`/traffic_view${result.payload.id}`);
        });
    }, [])
    return (
        <>
            <Spinner loading={loading} />
            {
                error ? (
                    <ErrorView error={error} />
                ) : (
                    data && (

                        <form onSubmit={onSubmitEdit}>
                            <input type="hidden" name="id" defaultValue={item.id} />
                            <TableEx>
                                <colgroup>
                                    <col width='120' />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>연도</th>
                                        <td className="inputWrapper">
                                            <input type="text" className="field" name="year" defaultValue={item.year} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>월</th>
                                        <td className="inputWrapper">
                                            <select name="month" defaultValue={item.month}>
                                                <option value="" >--- 월을 선택해주세요 ---</option>
                                                {
                                                    [...new Array(12)].map((v, idx) => {
                                                        return (
                                                            <option key={idx + 1} value={idx + 1}>{idx + 1}월</option>
                                                        );
                                                    })
                                                }
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>사고건 수</th>
                                        <td className="inputWrapper">
                                            <input type="text" className="field" name="accident" defaultValue={item.accident} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>사망자 수</th>
                                        <td className="inputWrapper">
                                            <input type="text" className="field" name="death" defaultValue={item.death} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>부상자 수</th>
                                        <td className="inputWrapper">
                                            <input type="text" className="field" name="injury" defaultValue={item.injury} />
                                        </td>
                                    </tr>
                                </tbody>
                            </TableEx>


                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <button type="submit">수정하기</button>
                            </div>
                        </form>
                    )
                )
            }
        </>
    );
});

export default TrafficEdit;