import React from 'react'
// (3-1) /src 폴더 하위의 임의의 경로에 존재하는 이미지 파일 참조
//  --> 현재 소스파일을 기준으로 하는 상대경로로 지정
//  --> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from '../assets/img/sample.png';

/**
 * Inline Css를 적용한 컴포넌트
 * ex) <div style = "..." > </div>
 */
const InlineCss = () => {
    /** (1-1) Css로 사용될 JSON 객체 정의 */
    //  Css 속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함.
    //  ex) document.getElementById("hello").style.backgroundColor = "#ff00ff"
    const myStyle = {
        backgroundColor: '#f60',
        fontSize: '20px',
        color: '#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    }


    return (
        <div>
            <h2>InlineCss</h2>

            <h3>변수로 정의된 CSS 참조하기</h3>
            {/* (1-2) JSON 객체를 style 속성에 적용 */}
            <div style={myStyle}>Hello React Css</div>

            <h3>직접 CSS 코딩하기</h3>
            {/* (2) CSS 직접 코딩 */}
            <div
                style={{
                    backgroundColor: '#ff0',
                    fontSize: '20px',
                    color: '#0f6',
                    fontWeight: 'bold',
                    padding: '10px 25px',
                    marginBottom: '10px'
                }}>
                Hello React Css(2)
            </div>

            <h3>이미지 참조하기</h3>
            {/* (3-1) 이미지 사용 시 alt 속성을 지정 안하면 경고 발생 */}
            <img src={sample} alt="샘플이미지" width="240" height="240" />


            {/* (3-2) public 폴더에 있는 파일들은 단순 절대경로로 참조 가능함 (public 폴더 하위에 임의의 폴더 생성도 가능하다.) */}
            <img src='/logo192.png' alt="react" width="240" height="240" />

        </div>
    )
}

export default InlineCss