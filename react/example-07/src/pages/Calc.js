import React from 'react'

/** action array */
const act = ['+', '-', '*', '/'];

/** function */
function myCalc(state, action) {
    console.log(action);
    switch (action[0]) {
        case '+':
            return +action[1] + +action[2];
        case '-':
            return +action[1] - +action[2];

        case '*':
            return +action[1] * +action[2];

        default:
            return +action[1] / +action[2];
    }
}
const Calc = () => {

    /** ref */
    const x = React.useRef();
    const y = React.useRef();
    const exec = React.useRef();

    /** reducer */
    const [resultValue, getResultValue] = React.useReducer(myCalc, 0);

    /** Memo (color)*/

    const colors = React.useMemo(() => {
        return (Math.floor(resultValue%2) === 0) ?'#f60' : '#06f';
    }, [resultValue]);

    /** Callback */
    const onBtnClick = React.useCallback(e => {
        const action = [exec.current.value, x.current.value, y.current.value];
        getResultValue(action);
    }, []);

    return (
        <div>
            <h2>Calc</h2>
            <p>useState,useEffect,useRef를 사용한 사칙연산 구현</p>
            <hr />

            <input type="text" ref={x} />
            <select ref={exec}>
                {act.map((v, i) => {
                    return (<option key={i}>{v}</option>);
                })}
            </select>
            <input type="text" ref={y} />
            <button
                type='button'
                onClick={onBtnClick}
            >
                결과확인</button>
            <p style={{ color: colors }}>
                결과값: {resultValue}
            </p>
        </div>
    );
};

export default Calc;