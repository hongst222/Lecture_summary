import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slices/DepartmentSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx'

const DepartmentAdd = memo(() => {
    /** 저장 완료 후 목록으로 되돌아 가기 위한 페이지 강제 이동 함수 생성 */
    const navigate = useNavigate();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.DepartmentSlice);

    /** form의 submit 버튼이 눌려졌을 때 호출될 이벤트 핸들러 */
    const onDepartmentSubmit = useCallback(e => {
        e.preventDefault();

        const current = e.currentTarget;

        dispatch(postItem({
            dname: current.dname.value,
            loc: current.loc.value
        })).then((result) => {
            /** Slice의 postItem.fulfiled 가 먼저 실행된 후 이 곳이 실행된다. */
            //  result.meta --> 백엔드에게 전송한 파라미터
            //  result.payload ==> 백엔드로부터 전송받은 응답결과
            console.log(result);

            // 처리가 완료된 후 상세 페이지로 이동
            // --> 몇 번 데이터인지 path파라미터로 전달한다. querystring도 가능함
            navigate(`/department_view/${result.payload.id}`);
        });
    })
    return (
        <div>
            <Spinner loading={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onDepartmentSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className="inputWrapper">
                                    <input type="text" className="field" name='dname' />
                                </td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                <td className="inputWrapper">
                                    <input type="text" className="field" name='loc' />
                                </td>
                            </tr>
                        </tbody>

                        <div style={{ textAlign: 'center' }}>
                            <button type='submit'>저장하기</button>
                        </div>
                    </TableEx>
                </form>
            )}
        </div>
    );
});

export default DepartmentAdd;