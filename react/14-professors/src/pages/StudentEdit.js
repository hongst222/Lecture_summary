import React, { memo, useCallback, useEffect, useMemo } from 'react';
/** 리덕스 사용 */
import { useSelector, useDispatch } from 'react-redux';

/** 파라미터, 네비게이터 사용 */
import { useParams, useNavigate } from 'react-router-dom';

/** 고용일자를 위한 dayjs */
import dayjs from 'dayjs';

/** 동기로 받아오는 형식을 위함 */
import { getCurrentData } from '../slices/StudentSlice';

/** 슬라이스 */
import { getDepartmentList } from '../slices/DepartmentSlice';
import { getList } from '../slices/ProfessorSlice';
import { getItem, putItem } from '../slices/StudentSlice';
/** 컴포넌트 */
import Spinner from '../components/Spinner';
import TableEx from '../components/TableEx';
import ErrorView from '../components/ErrorView';


const StudentEdit = memo(() => {
    /** path 파라미터 받기 */
    const { id } = useParams();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data: student, loading: loading1, error: error1 } = useSelector(state => state.StudentSlice);
    const { data: professor, loading: loading2, error: error2 } = useSelector(state => state.ProfessorSlice);
    const { data: department, loading: loading3, error: error3 } = useSelector(state => state.DepartmentSlice);

    /** 데이터 가져오기 */
    useEffect(() => {
        dispatch(getCurrentData());
        dispatch(getDepartmentList());
        dispatch(getList());
    }, []);

    /** student 데이터 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
        if (student) {
            return student.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({ id: id }));
        }
    }, [student]);
    /**  페이지 강제 이동을 위한 Navigate */
    const navigate = useNavigate();

    /** form의 submit이 눌렸을 때 호출될 이벤트 핸들러 */
    const onStudentSubmit = useCallback(e => {
        e.preventDefault();
        const current = e.currentTarget;

        dispatch(putItem({
            id: current.id.value,
            name: current.name.value,
            userid: current.userid.value,
            grade: current.grade.value,
            idnum: current.idnum.value.replace("-",""),
            birthdate: current.birthdate.value,
            tel: current.tel.value,
            height: current.height.value.replace("cm",""),
            weight: current.weight.value.replace("kg",""),
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
                    <form onSubmit={onStudentSubmit}>
                        <input type="hidden" name="id" defaultValue={item?.id} />
                        <TableEx>
                            <colgroup>
                                <col width='120' />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>이름</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='name' defaultValue={item?.name} />
                                    </td>
                                </tr>

                                <tr>
                                    <th>접속아이디</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='userid' defaultValue={item?.userid} />
                                    </td>
                                </tr>

                                <tr>
                                    <th>학년</th>
                                    <td className='inputWrapper'>
                                        <select className="field" name='grade' defaultValue={item?.grade} >
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
                                        <input type="text" className="field" name='idnum' defaultValue={item.idnum.substring(0,6)+"-"+item.idnum.substring(6)} />
                                    </td>
                                </tr>


                                <tr>
                                    <th>생년월일</th>
                                    <td className='inputWrapper'>
                                        <input type="date" className="field" name='birthdate' defaultValue={dayjs(item?.birthdate).format("YYYY-MM-DD")} />
                                    </td>
                                </tr>

                                <tr>
                                    <th>전화번호</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='tel' defaultValue={item?.tel} />
                                    </td>
                                </tr>


                                <tr>
                                    <th>키</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='height' defaultValue={item?.height+"cm"} />
                                    </td>
                                </tr>

                                <tr>
                                    <th>몸무게</th>
                                    <td className='inputWrapper'>
                                        <input type="text" className="field" name='weight' defaultValue={item?.weight+"kg"} />
                                    </td>
                                </tr>

                                <tr>
                                    <th>전공</th>
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
                                <tr>
                                    <th>담당교수</th>
                                    <td className='inputWrapper'>
                                        <select name="profno" className='field' defaultValue={item?.profno} >

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
                            <button type="submit">수정하기</button>
                        </div>
                    </form>
                )}
        </>
    );
});

export default StudentEdit;