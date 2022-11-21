import React, { memo, useCallback, useEffect } from 'react';
/** 주소 강제 이동 */
import { useNavigate } from 'react-router-dom';
/** redux 패키지 */
import { useSelector, useDispatch } from 'react-redux';
/** ProfessorSlice 이용 */
import { postItem } from '../slices/ProfessorSlice';
/** DepartmentSlice 이용 */
import { getDepartmentList } from '../slices/DepartmentSlice';

/** 컴포넌트 */
import TableEx from '../components/TableEx';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const ProfessorAdd = memo(() => {
  // 슬라이스 사용을 위한 초기화
  const dispatch = useDispatch();
  /** professor */
  const { loading: loading1, error: error1 } = useSelector(state => state.ProfessorSlice);
  /** department(부서선택을 위함) */
  const { data: department, loading: loading2, error: error2 } = useSelector(state => state.DepartmentSlice);

  // 저장 후 주소 이동을 위한 네비게이터 '/professor' 로 갈 것
  const navigate = useNavigate();

  /** 최초 렌더링 시 학과 목록 불러옴 */
  useEffect(() => {
    dispatch(getDepartmentList());
  }, []);

  /** 데이터 폼 제출 시 이벤트 처리 */
  const onSubmitAdd = useCallback(e => {
    e.preventDefault();
    const current = e.currentTarget;
    
    dispatch(postItem({
      name: current.name.value,
      userid: current.userid.value,
      position: current.position.value,
      sal: current.sal.value,
      hiredate: current.hiredate.value,
      comm: current.comm.value,
      deptno: current.deptno.value
    })).then((result) => {
      // dispatch 함수는 promise 객체를 반환함, 성공시 fulfilled의 리턴이 결과로 나옴.
      navigate(`/professor_view/${result.payload.id}`);
    });
  }, [dispatch, navigate]);
  return (
    <>
      <Spinner loading={loading1 || loading2} />
      {
        error2 ? (
          <ErrorView error={error2} />
        ) : (
            <form onSubmit={onSubmitAdd}>
              <TableEx>
                <colgroup>
                  <col width='120' />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>이름</th>
                    <td className='inputWrapper'>
                      <input type="text" className="field" name='name' />
                    </td>
                  </tr>

                  <tr>
                    <th>접속아이디</th>
                    <td className='inputWrapper'>
                      <input type="text" className="field" name='userid' />
                    </td>
                  </tr>

                  <tr>
                    <th>직급</th>
                    <td className='inputWrapper'>
                      <select className="field" name='position' >
                        <option value="교수">교수</option>
                        <option value="부교수">부교수</option>
                        <option value="조교수">조교수</option>
                        <option value="전임강사">전임강사</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th>급여</th>
                    <td className='inputWrapper'>
                      <input type="number" className="field" name='sal' />
                    </td>
                  </tr>

                  <tr>
                    <th>고용일자</th>
                    <td className='inputWrapper'>
                      <input type="datetime-local" className="field" name='hiredate' />
                    </td>
                  </tr>

                  <tr>
                    <th>추가수당</th>
                    <td className='inputWrapper'>
                      <input type="number" className="field" name='comm' />
                    </td>
                  </tr>

                  <tr>
                    <th>담당전공</th>
                    <td className='inputWrapper'>
                      <select name="deptno" className='field'>
                        <option value = "">---- 담당전공을 선택해주세요 ----</option>
                        {
                          department && department.map((v, i) => {
                            return (
                              <option key={v.id} value={v.id}>{v.dname}</option>
                            );
                          })
                        }
                      </select>
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