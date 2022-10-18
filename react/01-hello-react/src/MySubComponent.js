import React from 'react';

const MySubComponent = () => {
    //  리턴은 항상 HTML 구조를 의미하는 JSX 문법이어야 함.
    //  JSX 구조는 무조건 단 하나의 태그 요소만 반환해야 함.
    //  --> 복잡한 구조는 부모요소 하나에 모두 포함되어야 한다는 의미
    return (
        <div>
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    );
}

export default MySubComponent;