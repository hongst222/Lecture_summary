import React from 'react'
import { useParams } from 'react-router-dom';
const DepartmentPath = () => {
    console.clear();

    const params = useParams();
    console.group("uselocation()리턴값 확인");
    console.debug(params);
    console.groupEnd();

    const {search} = params;
    const query = new URLSearchParams(search);
    console.group("QueryString 확인");
    console.debug(query);
    console.groupEnd();

    console.group("파라미터 처리 결과 확인");
    console.debug("요청된 학과번호 값 %s (%s)", params.id, typeof params.id);
    console.debug("요청된 메시지 내용 %s (%s)", params.msg, typeof params.msg);
    console.groupEnd();


    //한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
    const departmentList = {
        item:[
            {id: 201, dname: '전자공학과', loc:'3호관'},
            {id: 202, dname: '기계공학과', loc:'4호관'}
        ]
    };
    // 전달된 파라미터를 정수로 변환
    const id = +(params.id);
    
    // 조회 결과가 저장될 객체
    let departmentItem = null;

    //미리 준비한 JSON에서 id값이 일치하는 정보를 조회
    departmentList.item.some((item,index) => {
        if(item.id === id) {
            departmentItem= item;
            return true;
        }
        return false;
    });


    if(!departmentItem){
        return (<h2>존재하지 않는 데이터에 대한 요청이다.</h2>);
    }
    return(
        <div>
            <h1>{departmentItem.dname}</h1>
            <ul>
                <li>학과번호 : {departmentItem.id}</li>
                <li>학과위치 : {departmentItem.loc}</li>
            </ul>
        </div>
    )

}

export default DepartmentPath
