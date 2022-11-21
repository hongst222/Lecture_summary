import React, { memo, useCallback, useEffect, useMemo } from 'react';
/** 리덕스 사용 */
import { useSelector, useDispatch } from 'react-redux';

/** 파라미터, 네비게이터 사용 */
import { useParams, useNavigate } from 'react-router-dom';

/** 슬라이스 */
import { getDepartmentList } from '../slices/DepartmentSlice';
import { getList } from '../slices/ProfessorSlice';
import { postItem } from '../slices/StudentSlice';

/** 컴포넌트 */
import Spinner from '../components/Spinner';
import TableEx from '../components/TableEx';
import ErrorView from '../components/ErrorView';

const StudentAdd = memo(() => {
    /** path 파라미터 받기 */
    const { id } = useParams();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { loading: loading1, error: error1 } = useSelector(state => state.StudentSlice);
    const { data: professor, loading: loading2, error: error2 } = useSelector(state => state.ProfessorSlice);
    const { data: department, loading: loading3, error: error3 } = useSelector(state => state.DepartmentSlice);

    /** 데이터 가져오기 */
    useEffect(() => {
        dispatch(getDepartmentList());
        dispatch(getList());
    }, []);


    /**  페이지 강제 이동을 위한 Navigate */
    const navigate = useNavigate();

    /** form의 submit이 눌렸을 때 호출될 이벤트 핸들러 */
    const onSubmitAdd = useCallback(e => {
        e.preventDefault();
        const current = e.currentTarget;

        dispatch(postItem({
            id: null,
            name: current.name.value,
            userid: current.userid.value,
            grade: current.grade.value,
            idnum: current.idnum.value.replace("-",""),
            birthdate: current.birthdate.value,
            tel: current.tel.value,
            height: current.height.value,
            weight: current.weight.value,
            deptno: current.deptno.value,
            profno: current.profno.value
        })).then((result) => {
            navigate(`/student_view/${result.payload.id}`);
        });
    }, []);
    return (
        <>
            <Spinner loading={loading1 || loading2} />
            {
                error1 || error2 || error3 ? (
                    <ErrorView error={error1 || error2 || error3} />
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
                                    <th>학년</th>
                                    <td className='inputWrapper'>
                                        <select className="field" name='grade' >
                                            <option value="">--학년을 선택해주세요--</option>
                                            <option value="1">1학년</option>
                                            <option value="2">2학년</option>
                                            <option value="3">3학년</option>
                                            <option value="4">4학년</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th>주민번호</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='idnum' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>생년월일</th>
                                    <td className='inputWrapper'>
                                        <input type="date" className="field" name='birthdate'/>
                                    </td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='tel' />
                                    </td>
                                </tr>



                                <tr>
                                    <th>키</th>
                                    <td className='inputWrapper'>
                                        <input type="number" className="field" name='height' />
                                    </td>
                                </tr>

                                <tr>
                                    <th>몸무게</th>
                                    <td className='inputWrapper'>
                                        <input type="number" className="field" name='weight' />
                                    </td>
                                </tr>

                                <tr>
                                    <th>전공</th>
                                    <td className='inputWrapper'>
                                        <select name="deptno" className='field'>
                                            <option value="">--전공을 선택해주세요--</option>
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
                                <tr>
                                    <th>담당교수</th>
                                    <td className='inputWrapper'>
                                        <select name="profno" className='field'>
                                            <option value="">--담당교수를 선택해주세요--</option>
                                            {
                                                professor && professor.map((v, i) => {
                                                    return (
                                                        <option key={v.id} value={v.id}>{v.name}</option>
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

export default StudentAdd;