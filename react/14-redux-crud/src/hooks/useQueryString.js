import { useLocation } from "react-router-dom";

const useQueryString = (props) => {
    //  QueryString 문자열 추출
    const {search} = useLocation();
    //  QueryString 문자열을 객체로 변환
    const query = new URLSearchParams(search);

    //  생성된 객체를 JSON으로 반환
    const params = Object.fromEntries(query);
    return params;
};

export {useQueryString};