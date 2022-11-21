import React, { memo, useCallback, useEffect } from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import Spinner from '../components/Spinner';
import Table from '../components/Table';


const LinkContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
`;

const TopLink = styled(NavLink)`
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #000;
    text-decoration: none;

    &:hover {
        background-color: #06f2;
    }
`;

const ProfessorList = memo(() => {
    /** 화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */
    const [professor, setProfessor] = React.useState([]);

    /** 백엔드로부터 데이터 불러오기  - 자체 캐시기능 방지 */
    const [{ data, loading: loading1, error }, refetch] = useAxios("http://localhost:3022/professor", {
        useCache: false

    });
    /** axios-hook에 의해 생성된 상태값인 data가 변경되었을때 (ajax로딩이 완료되었을 때) 실행될 hook */
    useEffect(() => {
        //  ajax의 결과를 화면에 표시하기 위한 상태값에 복사한다.
        setProfessor(data);
    },[data]);
    /** 백엔드로부터 데이터 삭제하기 - 자체 캐시기능 방지 , 삭제 버튼 이벤트에 의해 호출되어야 하므로 메뉴얼 실행 모드*/
    //  조회를 위한 useAxios와 구조분해 변수명이 겹치는 것을 방지하기 위해 변수이름을 loading2로 변경하여 처리
    //  조회를 위한 useAxios와 reftch 함수이름이 중복되는 것을 방지하려고 함수명을 sendDelete로 변경
    const [{loading: loading2}, sendDelete] = useAxios({
        method: 'DELETE'
    }, {
        // useCache: false,
        manual: true
    })
    const onDeleteClick = useCallback((e) => {
        e.preventDefault();

        //  이벤트가 발생한 대상을 가져옴 --> 삭제하기 링크
        const current = e.target;

        // 클릭된 링크에 숨겨져 있는 일련번호와 교수이름 가져오기
        const id = parseInt(current.dataset.id);
        const name = current.dataset.name;

        if(window.confirm(`정말 ${name}교수의 정보를 삭제하시겠습니까?`)){
            //  백엔드에 삭제 오쳥하기 -> 입력, 수정, 삭제는 async-await 문법으로 처리해야 한다.
            (async() => {
        
                try{
                    await sendDelete(`http://localhost:3022/professor/${id}`);
                } catch(e){
                    console.error(e);
                    window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.mssage}`);
                    return;
                }
                setProfessor(professor => {
                    const findIdx = professor.findIndex((v,i) => v.id === id);
                    professor.splice(findIdx,1);
                    return professor;
                })
            })();
        }
    },[]);


    return (
        <div>
            <Spinner loading={loading1 || loading2} />

            <LinkContainer>
                <TopLink to='add'>교수 추가하기</TopLink>
            </LinkContainer>

            {error ? (
                <div>
                    <h1>Oops~!!! {error.code} Error.</h1>
                    <hr />
                    <p>{error.message}</p>
                </div>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th >No.</th>
                            <th >이름</th>
                            <th >아이디</th>
                            <th >직급</th>
                            <th >급여</th>
                            <th >입사일</th>
                            <th >보직수당</th>
                            <th>소속학과번호</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(({id,name,userid,position,sal,hiredate,comm,deptno }, i) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{userid}</td>
                                    <td>{position}</td>
                                    <td>{sal}만원</td>
                                    <td>{dayjs(hiredate).format('YY/MM/DD')}</td>
                                    <td>{comm && `${comm}만원`}</td>
                                    <td>{deptno}</td>
                                    <td>
                                        {/*수정할 대상을의미하는 id값을 'edit'라는 URL을 갖는 페이지에 path파라미터로 전달 */}
                                        <NavLink to ={`edit/${id}`}>수정하기</NavLink>
                                    </td>

                                    <td>
                                        {/* '#!'는 일반 html페이지서 <a>태그에 적용하는 '#'과 동일 */}
                                        <a href="#!" data-id={id} data-name = {name} onClick = {onDeleteClick}>
                                             삭제하기
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            )}
        </div>
    );
});

export default ProfessorList;