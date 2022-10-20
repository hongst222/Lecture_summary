import React from 'react';
import PropTypes from 'prop-types';


const MyPropTypesSub = ({name, age, hobby}) => {
    
    return (
        <div>
            <h3>MypropTypeSub</h3>
            <p>
                안녕하세요. 제 이름은 {name}이고, 나이는 {age}세 입니다.
            </p>
            <p>ㄴ
                {hobby && (<span>취미는 {hobby}입니다.</span>)}
            </p>
        </div>
    );
};

/** 이 컴포넌트로 전달되는 props 값들에 대한 형식(DataType)과 필수 여부 지정 */
//  규칙에 맞지 않는 props값에 대해 브라우저 개발자 콘솔에 Warning 메세지가 출력 된다.
MyPropTypesSub.propTypes = {
    //name 속성의 데이터 타입 문자열 지정
    name: PropTypes.string,
    age: PropTypes.number,
    // hobby 속성의 데이터 타입은 문자열, 필수.
    hobby: PropTypes.string.isRequired
};


export default MyPropTypesSub;