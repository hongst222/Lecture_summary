import React, { memo, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';

const Department = memo(() => {
  //  화면에 표시할 상태값(ajax 연동 결과롤 받아올 json) --> 초기값을 빈 배열로 정의
  //  ajax처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관 없이 화면 출력이 먼저 수행 된다.
  //  그러므로 Ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신 되도록 처리해야 한다.
  const [department, setDepartment] = useState([]);
  //  현재 ajax가 데이터를 로딩중인지 의미하는 상태 값
  const [loading, setLoading] = useState(false);

  //QueryString으로 전달되는 검색 키워드를 받는다.
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const { keyword } = Object.fromEntries(query);

  const [dropId, setDropId] = React.useState(-1);

  // 수정할 항목에 대한 id 값을 저장하기 위한 상태값
  const [updateId, setUpdateId] = React.useState(-1);

  // 페이지 강제 이동을 위한 객체 생성
  const navigate = useNavigate();

  /** 수정 버튼  이벤트 핸들러 */
  //  성능 최적화를 위해 useCallbck() 적용
  const onUpdateClick = React.useCallback(e => {
    e.preventDefault();
    //  수정할 항목에 대한 인덱스 번호를 상태값으로 설정
    setUpdateId(parseInt(e.currentTarget.dataset.id));
  }, []);

  /** 수정사항 저장 버튼 이벤트 핸들러 */
  const onUpdateSubmit = React.useCallback(e => {
    e.preventDefault();

    // 이벤트가 발생한 <form>요소 취득
    const current = e.target;

    // <form>요소 내의 <input> 요소들을 name 속성 값으로 접근하여 입력값을 얻음
    const id = current.id.value;
    const dname = current.dname.value;
    const loc = current.loc.value;

    // Ajax 로딩 시작 알림
    setLoading(true);

    //  백엔드에 데이터가 수정됨을 알림
    (async () => {
      // 수정 결과를 넣을 json
      let json = null;

      //  Ajax를 통한 데이터 수정 요청
      try {
        const response = await axios.put(`http://localhost:3001/department/${id}`, {
          dname: dname,
          loc: loc
        });

        //  수정 결과에 대한 json받음
        json = response.data;
      } catch (e) {
        console.error(e);
        alert('연동 실패!');

      } finally {
        // Ajax 종료
        setLoading(false);
      }

      if (json !== null) {
        // 함수형 업데이트
        //  --> 콜백함수의 파라미터로 상태값의 복사본이 전달되므로 이 값을 직접 수정해도 된다.
        setDepartment(department => {
          //  원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
          const find = department.findIndex((v, i) => v.id === json.id);
          //  원본 상태값의 해당 인덱스 번호 (find) 위치부터 1개를 ajax로 반환받은 수정결과 데이터로 교체한다.
          department.splice(find, 1, json);
          //  수정된 원본 배열을 리턴한다.
          return department;
        })
      }
    })();

    // 상태변수 제자리로
    setUpdateId(-1);
  }, []);
  /** 삭제 이벤트 핸들러 */
  const onDeleteClick = React.useCallback((e) => {
    //클릭된 자기 자신
    const current = e.currentTarget;
    //클릭된 자신에게 숨어있는 data-id값 추출
    const id = parseInt(current.dataset.id);
    // 삭제 대상임을 알림
    setDropId(id);
  })
  /** dropID가 변경되었을 때 실행할 hook */
  React.useEffect(() => {
    if (dropId != -1) {
      // id가 일치하지 않는 항목만 filter로 걸러내어 상태값을 갱신
      // 성능향상을 위해 상태값을 함수형 업데이트로 처리
      //  --> 상태값을 파라미터로 받는 콜백에서 상태값 갱신 결과를 리턴
      setDepartment(department => department.filter((v, i) => v.id !== dropId));

      setLoading(true);

      setTimeout(() => {
        //  백엔드에 데이터 삭제 알림
        (async () => {
          try {
            await axios.delete(`http://localhost:3001/department/${dropId}`);
          } catch (e) {
            console.error(e);
            alert('연동실패');

          } finally {
            setLoading(false);
          }
        })();
      }, 500);

      setDropId(-1)
    }
  }, [dropId]);

  /** 페이지가 처음 열렸을 때 실행할 hook */
  //  hook에 전달되는 콜백함수에 직접적으로 async를 적용할 수 없다.
  useEffect(() => {
    //async-await 처리를 위한 즉시 실행 함수 정의
    (async () => {
      //  Ajax 로딩 시작을 알림
      setLoading(true);

      //  ajax의 결과를 저장할 변수 준비
      let json = null;

      try {
        const response = await axios.get("/department", {
          //검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
          params: keyword ? { dname: keyword } : null
        });
        json = response.data;
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패했습니다. \n${e.message}`);
        return;
      } finally {
        //  Ajax 종료
        setLoading(loading => false);
      }
      //ajax 값 반영
      setDepartment(department => json);
    })();
  }, [keyword]);

  /** 검색폼에서의 전송 이벤트 */
  //  성능 최적화를 위해 useCallback()적용함
  const onSerachSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("submit~!!");
    //  검색어를 QueryString으로 지정하여 페이지를 이동한다.
    navigate(`/department?keyword=${e.currentTarget.keyword.value}`)
  }, [navigate]);

  /** 데이터 추가 submit 이벤트 */
  const onDataAddSubmit = useCallback((e) => {
    //  페이지 강제 이동을 차단
    e.preventDefault();

    //  이벤트가 발생한 폼 자신
    const form = e.currentTarget;

    //  폼안의 input태그에 name속성으로 접근하여 입력값 취득
    const dname = form.dname.value;
    const loc = form.loc.value;

    (async () => {
      //  Ajax로딩 시작을 알림 --> 함수형 업데이트
      setLoading(loading => true);

      //  ajax의 결과를 저장할 변수 준비
      let json = null;
      try {
        const response = await axios.post('/department', {
          //  입력값을 post 파라미터로 전달
          dname: dname,
          loc: loc
        });
        json = response.data;
        console.log(json);
      } catch (e) {
        console.error(e);
        alert(`데이터 저장 실패 \n${e.message}`);
        return;
      } finally {
        setLoading(loading => false);
      }
      setDepartment(department => department.concat(json));

      form.reset();
    })();
  }, []);
  return (
    <div>
      <Spinner loading={loading} />
      {/* 입력 폼 */}
      <form onSubmit={onDataAddSubmit}>
        <div>
          <label htmlFor="dname">학과 : </label>
          <input type="text" name='dname' id='dname' />

        </div>
        <div>
          <label htmlFor="loc">위치 : </label>
          <input type="text" name='loc' id='loc' />
        </div>
        <button type="submit">저장하기</button>
      </form>

      {/* 검색 폼 */}
      <form onSubmit={onSerachSubmit}>
        <input type="text" name="keyword" />
        <button type='submit'>검색</button>
      </form>
      
      <form onSubmit={onUpdateSubmit}>

        <table border='1'>
          <thead>
            <tr>
              <th>학과번호</th>
              <th>학과명</th>
              <th>학과위치</th>
              <th>수정하기</th>
              <th>삭제하기</th>
            </tr>
          </thead>
          <tbody>
            {!department.length < 0 ? (
              <tr>
                <td colSpan="5" align="center">
                  검색결과 없음.
                </td>
              </tr>
            ) : (
              department.map((item, index) => {
                return (
                  <tr key={item.id}>
                    {/* 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면? */}
                    {updateId == item.id ? (
                      <>
                        {/* 수정을 위한 <input>요소를 표시 */}
                        <td><input type="hidden" name="id" defaultValue={item.id} />{item.id}</td>
                        <td><input type="text" name="dname" defaultValue={item.dname} />{item.dname}</td>
                        <td><input type="text" name="loc" defaultValue={item.loc} />{item.loc}</td>
                        <td colSpan="2">
                          <button type="submit">
                            수정사항 저장
                          </button>

                        </td>
                      </>
                    ) : (
                      <>
                        {/* 데이터를 텍스트로 출력 */}
                        <td>{item.id}</td>
                        <td>{item.dname}</td>
                        <td>{item.loc}</td>
                        <td>
                          <button type="button" data-id={item.id} onClick={onUpdateClick}>수정하기</button>
                        </td>
                        <td>
                          <button type='button' data-id={item.id} onClick={onDeleteClick}>
                            삭제하기
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </form>

    </div>
  );
});

export default Department;