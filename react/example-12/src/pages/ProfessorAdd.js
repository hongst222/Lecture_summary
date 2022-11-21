import React, { memo } from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';
import dayjs from 'dayjs';

/** Table 컴포넌트의 CSS 확장한 컴포넌트 */
const TableEX = styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;
    .inputWrapper {
        padding: 0;
        position: relative;
        text-align: left;

        .field {
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label {
            margin-left: 7px;
            margin-right: 10px;

            input {
                margin-right: 10px;
            }
        }
    }

`;

const ProfessorAdd = memo(() => {
    /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성  */
    const navigate = useNavigate();

    /** 드롭다운에 표시할 학과 목록 조회 */
    const [{ data, loading: loading1, error }] = useAxios('http://localhost:3022/department');

    /** 백엔드에 데이터 저장을 위한 Ajax 요청 객체 생성 - 메뉴얼 전송 모드 */
    const [{ loading: loading2 }, refetch] = useAxios({
        url: 'http://localhost:3022/professor',
        method: 'POST'
    }, { manual: true });


    const onSubmit = React.useCallback(e => {
        e.preventDefault();
        //  이벤트 발생한 폼 객체
        const current = e.target;
        //  입력, 수정, 삭제 처리는 async-await 문법 사용해야함
        (async () => {
            try {
                await refetch({
                    data: {
                        name: current.name.value,
                        userid: current.userid.value,
                        position: current.position.value,
                        sal: +current.sal.value,
                        hiredate: dayjs(current.hiredate.value).toISOString(),
                        comm: +current.comm.value,
                        deptno: +current.deptno.value
                    }
                });
            } catch (e) {
                console.error(e);
                window.alert(`[${e.response.status} ${e.response.statusText} \n${e.message}]`);
                return;
            }

            window.alert('저장되었습니다.');
            //  페이지 강제 이동 (window.location.href= URL 기능과 동일)
            navigate('/');

        })();
    }, [refetch, navigate]);

    return (
        // 플래그먼트 <></ >
        // 감싸기만하는 역할임
        // 가상의 존재임, HTML태그는 생성하지 않는다.
        <>
            <Spinner loading={loading1 || loading2} />

            {error ? (
                <div>
                    <h1>Oops~!! {error.code} Error.</h1>
                </div>
            ) :
                (
                    <form onSubmit={onSubmit}>
                        <TableEX>
                            <colgroup>
                                <col width="120" />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>이름</th>
                                    <td className="inputWrapper"><input className='field' type='text' name='name' /></td>
                                </tr>
                                <tr>
                                    <th>아이디</th>
                                    <td className="inputWrapper"><input className='field' type='text' name='userid' /></td>
                                </tr>
                                <tr>
                                    <th>직급</th>
                                    <td className="inputWrapper">
                                        <label>교수<input type="radio" name='position' value='교수' /></label>
                                        <label>부교수<input type="radio" name='position' value='부교수' /></label>
                                        <label>조교수<input type="radio" name='position' value='조교수' /></label>
                                        <label>전임강사<input type="radio" name='position' value='전임강사' /></label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>급여(만원)</th>
                                    <td className="inputWrapper"><input className='field' type='number' name='sal' /></td>
                                </tr>
                                <tr>
                                    <th>입사일</th>
                                    <td className="inputWrapper"><input className='field' type='date' name='hiredate' /></td>
                                </tr>
                                <tr>
                                    <th>보직수당(만원)</th>
                                    <td className="inputWrapper"><input className='field' type='number' name='comm' /></td>
                                </tr>
                                <tr>
                                    <th>소속학과</th>
                                    <td className="inputWrapper">
                                        <select name="deptno" className="field">
                                            <option value="">--- 선택하세요</option>
                                            {data && data.map((v, i) => {
                                                return (
                                                    <option key={i} value={v.id}>{v.dname}</option>
                                                );
                                            })}
                                        </select>
                                    </td>

                                </tr>
                            </tbody>
                        </TableEX>

                        <div style={{ textAlign: 'center' }}>
                            <button type='submit'>저장하기</button>
                        </div>
                    </form>
                )}
        </>

    );
});

export default ProfessorAdd;