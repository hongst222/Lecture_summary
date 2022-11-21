import React, { memo, useCallback, useEffect } from 'react';
/** 주소 강제 이동 */
import { useNavigate } from 'react-router-dom';
/** redux 패키지 */
import { useSelector, useDispatch } from 'react-redux';

import { postItem } from '../slices/TrafficSlice';

/** 컴포넌트 */
import TableEx from '../components/TableEx';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const ProfessorAdd = memo(() => {
  // 슬라이스 사용을 위한 초기화
  const dispatch = useDispatch();

  const { loading, error} = useSelector(state => state.TrafficSlice);
  
  // 저장 후 주소 이동을 위한 네비게이터 '/professor' 로 갈 것
  const navigate = useNavigate();

  
  /** 데이터 폼 제출 시 이벤트 처리 */
  const onSubmitAdd = useCallback(e => {
    e.preventDefault();
    const current = e.currentTarget;
    
    dispatch(postItem({
      id: null,
      year: current.year.value,
      month: current.month.value,
      accident: current.accident.value,
      death: current.death.value,
      injury: current.injury.value

    })).then((result) => {
      // dispatch 함수는 promise 객체를 반환함, 성공시 fulfilled의 리턴이 결과로 나옴.
      navigate(`/traffic_view/${result.payload.id}`);
    });
  }, [dispatch, navigate]);
  return (
    <>
      <Spinner loading={loading} />
      {
        error ? (
          <ErrorView error={error} />
        ) : (
            <form onSubmit={onSubmitAdd}>
              <TableEx>
                <colgroup>
                  <col width='120' />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>연도</th>
                    <td className="inputWrapper">
                      <input type="text" className="field" name="year" />
                    </td>
                  </tr>

                  <tr>
                    <th>월</th>
                    <td className="inputWrapper">
                      <select name="month">
                        <option value="">--- 월을 선택해주세요 ---</option>
                        {
                          [...new Array(12)].map((v,idx) => {
                            return(
                            <option key={idx+1} value={idx+1}>{idx+1}월</option>
                            );
                          })
                        }
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>사고건 수</th>
                    <td className="inputWrapper">
                      <input type="text" className="field" name="accident" />
                    </td>
                  </tr>

                  <tr>
                    <th>사망자 수</th>
                    <td className="inputWrapper">
                      <input type="text" className="field" name="death" />
                    </td>
                  </tr>

                  <tr>
                    <th>부상자 수</th>
                    <td className="inputWrapper">
                      <input type="text" className="field" name="injury" />
                    </td>
                  </tr>
                </tbody>
              </TableEx>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button type="submit">저장하기</button>
              </div>
            </form>
          )}
    </>
  );
});

export default ProfessorAdd;