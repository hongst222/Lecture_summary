import React, { memo, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getList } from "../slices/ProfessorSlice";

import styled from "styled-components";

import { useQueryString } from "../hooks/useQueryString";

const ControlContainer = styled.form`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;

  .control {
    margin-right: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
  }

  .clickable {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #06f2;
    }

    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;

const ProfessorList = memo(() => {
  // queryString 추출
  const { keyword } = useQueryString();
  /** 리덕스 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.ProfessorSlice);

  /** 최초 마운트 시 리덕스를 통한 목록 조회 */
  React.useEffect(() => {
    dispatch(getList({
      keyword: keyword
    }));
  }, [keyword]);

  /** 페이지 강제 이동 */
  const navigate = useNavigate();
  /** 검색 이벤트 */
  const onSubmitSearch = useCallback(e => {
    e.preventDefault();
    const current = e.currentTarget;
    const keyword = current.keyword;

    let redirectUrl = keyword.value ? `/professor/?keyword=${keyword.value}` : '/professor'
    navigate(redirectUrl);
  },[navigate])

  /** 삭제 버튼에 대한 이벤트 리스너 */
  const onProfessorItemDelete = useCallback(e => {
    e.preventDefault();
    const current = e.currentTarget;
    const {id, name} = current.dataset;

    if(window.confirm(`정말 ${name}을 삭제하시겠습니까?`)){
      dispatch(deleteItem({
        id:id
      })).then(({meta, payload}) => {
        navigate('/professor');
      });
    }
  },[]);
  /** 수정 버튼에 대한 이벤트 리스너 */
  const onProfessorEditClick = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id } = current.dataset;

    navigate(`/professor_edit/${id}`);
  });
  return (
    <div>
      {/* 로딩바 */}
      <Spinner loading={loading} />

      {/* 검색폼 */}
      <ControlContainer onSubmit={onSubmitSearch}>
        <input type="text" name='keyword' className="control" />
        <button type='submit' className="control clickable">Search</button>
        <NavLink to = '/professor_add' className="control clickable">교수정보 추가하기</NavLink>
      </ControlContainer>

      {/* 조회결과 */}
      {error ? (
        <ErrorView error={error} />
      ) : (
        //Ajax 처리 결과 존재
        data && (
          <Table>
            <thead>
              <tr>
                <th>교수번호</th>
                <th>이름</th>
                <th>접속아이디</th>
                <th>직급</th>
                <th>급여</th>
                <th>고용일자</th>
                <th>추가수당</th>
                <th>전공번호</th>
                <th>수정하기</th>
                <th>삭제하기</th>
              </tr>
            </thead>
            <tbody>
              {
              data.length > 0 ? (
                  data.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <NavLink to={`/professor_view/${item.id}`}>{item.name}</NavLink>
                        </td>
                        <td>{item.userid}</td>
                        <td>{item.position}</td>
                        <td>{item.sal}</td>
                        <td>{dayjs(item.hiredate).format("YYYY-MM-DD")}</td>
                        <td>{item.comm}</td>
                        <td>{item.deptno}</td>
                        <td>
                          <button type="button" data-id = {item.id} onClick={onProfessorEditClick}>
                            수정하기
                          </button>
                        </td>
                        <td>
                          <button type="button" data-id={item.id} data-name={item.name} onClick={onProfessorItemDelete}>
                            삭제하기
                          </button>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan='10' align='center'>
                      검색결과가 없습니다.
                    </td>
                  </tr>
                )}  
            </tbody>
          </Table>
        )
      )}
    </div>
  );
});

export default ProfessorList;
