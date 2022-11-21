import React, { memo,useCallback,useMemo,useEffect } from 'react';
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentData, deleteItem, getItem } from "../slices/StudentSlice";
import dayjs from "dayjs";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/TableEx";
const StudentView = memo(() => {
    /** path 파라미터 */
    const { id } = useParams();
    /** 리덕스 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StudentSlice);

    /** 렌더링 시 데이터 가져오기 */
    useEffect(() => {
        dispatch(getItem({ id: id }));
    }, []);

    /** data 값의 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
        if (data) {
            return data.find((v, i) => v.id == id);
        } else {
            dispatch(getItem({ id: id }));
        }
    }, [data]);

    /** 페이지 강제 이동을 위한 navigate */
    const navigate = useNavigate();

    /** 삭제 버튼에 대한 이벤트 리스너 */
    const onStudentItemDelete = useCallback(e => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name } = current.dataset;

        if (window.confirm(`정말 ${name}을 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            })).then(({ meta, payload }) => {
                navigate('/student');
            });
        }
    }, []);
    /** 수정 버튼 리스너 */
    const onStudentEdit = useCallback(e => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/student_edit/${id}`);
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
                                    <th>학번</th>
                                    <td>{item.id}</td>
                                </tr>

                                <tr>
                                    <th>이름</th>
                                    <td>{item.name}</td>
                                </tr>

                                <tr>
                                    <th>아이디</th>
                                    <td>{item.userid}</td>
                                </tr>

                                <tr>
                                    <th>학년</th>
                                    <td>{item.grade+"학년"}</td>
                                </tr>

                                <tr>
                                    <th>주민번호</th>
                                    <td>{item.idnum.substring(0,6)+"-*******"}</td>
                                </tr>

                                <tr>
                                    <th>생년월일</th>
                                    <td>{dayjs(item.birthdate).format("YYYY-MM-DD")}</td>
                                </tr>

                                <tr>
                                    <th>전화번호</th>
                                    <td>{item.tel}</td>
                                </tr>

                                <tr>
                                    <th>키</th>
                                    <td>{item.height+"cm"}</td>
                                </tr>

                                <tr>
                                    <th>몸무게</th>
                                    <td>{item.weight+"kg"}</td>
                                </tr>


                                <tr>
                                    <th>전공번호</th>
                                    <td>{item.deptno}</td>
                                </tr>

                                <tr>
                                    <th>교수번호</th>
                                    <td>{item.profno}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div style={{ textAlign: 'center' }}>
                            <NavLink to="/student">목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/student_add">등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/student_edit" data-id={item.id} onClick={onStudentEdit}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to="/student/#!" data-id={item.id} data-name={item.name} onClick={onStudentItemDelete}>삭제</NavLink>
                        </div>
                    </div>
                )
            )}

        </div>
    );
});

export default StudentView;