import React, { memo, useCallback, useEffect, useMemo } from 'react';
/** 리덕스 사용 */
import { useSelector, useDispatch } from 'react-redux';

/** 파라미터, 네비게이터 사용 */
import { useParams, useNavigate } from 'react-router-dom';

/** 고용일자를 위한 dayjs */
import dayjs from 'dayjs';

/** 동기로 받아오는 형식을 위함 */
import { getCurrentData } from '../slices/ProfessorSlice';

/** 슬라이스 */
import { getDepartmentList } from '../slices/DepartmentSlice';
import { getItem, putItem} from '../slices/ProfessorSlice';
/** 컴포넌트 */
import Spinner from '../components/Spinner';
import TableEx from '../components/TableEx';
import ErrorView from '../components/ErrorView';


const ProfessorEdit = memo(() => {
  /** path 파라미터 받기 */
  const {id} = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const {data: professor, loading: loading1, error: error1} = useSelector(state => state.ProfessorSlice);
  const {data: department, loading: loading2, error: error2} = useSelector(state => state.DepartmentSlice);

  /** 데이터 가져오기 */
  useEffect(() => {
    dispatch(getCurrentData());
    dispatch(getDepartmentList());
  },[]);

  /** professor 데이터 변경에 따른 사이드 이펙트 처리 */
  const item = useMemo(() => {
    if(professor){
      return professor.find((v,i) => v.id == id);
    } else {
      dispatch(getItem({id: id}));
    }
  },[professor]);
  /**  페이지 강제 이동을 위한 Navigate */
  const navigate = useNavigate();

  /** form의 submit이 눌렸을 때 호출될 이벤트 핸들러 */
  const onProfessorSubmit = useCallback(e => {
    e.preventDefault();
    const current = e.currentTarget;

    dispatch(putItem({
      id: current.id.value,
      name: current.name.value,
      userid: current.userid.value,
      position: current.position.value,
      sal: current.sal.value,
      hiredate: current.hiredate.value,
      comm: current.comm.value,
      deptno: current.deptno.value,
    })).then((result) => {
      navigate(`/professor_view/${result.payload.id}`);
    });
  },[]);
  return (
    <>
    <Spinner loading={loading1 || loading2} />
    {
      error1 || error2 ? (
        <ErrorView error={error1||error2} />
      ) : (
          <form onSubmit={onProfessorSubmit}>
            <input type="hidden" name="id"  defaultValue={item?.id}/>
            <TableEx>
              <colgroup>
                <col width='120' />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td className='inputWrapper'>
                    <input type="text" className="field" name='name'  defaultValue={item?.name} />
                  </td>
                </tr>

                <tr>
                  <th>접속아이디</th>
                  <td className='inputWrapper'>
                    <input type="text" className="field" name='userid' defaultValue={item?.userid} />
                  </td>
                </tr>

                <tr>
                  <th>직급</th>
                  <td className='inputWrapper'>
                    <select className="field" name='position' defaultValue={item?.position} >
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
                    <input type="number" className="field" name='sal' defaultValue={item?.sal} />
                  </td>
                </tr>

                <tr>
                  <th>고용일자</th>
                  <td className='inputWrapper'>
                    <input type="date" className="field" name='hiredate' defaultValue={dayjs(item?.hiredate).format("YYYY-MM-DD")} />
                  </td>
                </tr>

                <tr>
                  <th>추가수당</th>
                  <td className='inputWrapper'>
                    <input type="number" className="field" name='comm' defaultValue={item?.comm} />
                  </td>
                </tr>

                <tr>
                  <th>담당전공</th>
                  <td className='inputWrapper'>
                    <select name="deptno" className='field' defaultValue={item?.deptno} >

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
              <button type="submit">수정하기</button>
            </div>
          </form>
        )}
  </>
  );
});

export default ProfessorEdit;