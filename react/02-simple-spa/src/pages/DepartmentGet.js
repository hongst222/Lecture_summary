import React from "react";



// GET파라미터 추출 기능을 갖는 useLocation() 함수를 react-router-dom 패키지로부터 참조함.

import { useLocation } from "react-router-dom";

const DepartmentGet = () => {
    console.clear();

    const location = useLocation();
    console.group("uselocation()리턴값 확인");
    console.debug(location);
    console.groupEnd();

    const {search} = location;
    const query = new URLSearchParams(search);
    console.group("QueryString 확인");
    console.debug(query);
    console.groupEnd();

    console.group("파라미터 처리 결과 확인");
    console.debug("요청된 학과번호 값 %s", query.get('id', typeof query.get('id')));
    console.debug("요청된 메시지 내용 %s", query.get('msg', typeof query.get('msg')));
    console.groupEnd();


    //한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
    const departmentList = {
        item:[
            {id: 101, dname: '컴퓨터공학과', loc:'1호관'},
            {id: 102, dname: '멀티미디어학과', loc:'2호관'}
        ]
    };
    // 전달된 파라미터를 정수로 변환
    const id = +query.get('id');
    
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

    // const a =departmentList.item.filter((v) => v.id === id);
    // if(a){
    //     return(
    //         <div>
    //             <h1>{a[0].dname}</h1>
    //             <ul>
    //                 <li>학과번호 : {a[0].id}</li>
    //                 <li>학과위치 : {a[0].loc}</li>
    //             </ul>
    //         </div>
    //     )
    // }

    // const b = departmentList.item.find(v =>  v.id === id);
    // if(b){
    //     return(
    //         <div>
    //             <h1>{b.dname}</h1>
    //             <ul>
    //                 <li>학과번호 : {b.id}</li>
    //                 <li>학과위치 : {b.loc}</li>
    //             </ul>
    //         </div>
    //     )
    // }


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

export default DepartmentGet;