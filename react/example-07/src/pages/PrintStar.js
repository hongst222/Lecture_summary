import React from 'react';


const PrintStar = () => {
    const console = React.useRef();    //ref
    const [rowNum, setRowNum] = React.useState(0); //state
    const onRowNumChange =  e => {
        setRowNum(e.currentTarget.value);
    }

    //effect
    React.useEffect(() => {
        let str =''
        for (let i = 0; i < rowNum; i++) {
            for (let j = 0; j <= i; j++) {
                str += '*';
            }
            str +='<br/>';
        }
        console.current.innerHTML = str;
    }, [rowNum]);

    return (
        <div>
            <h2>PrintStar</h2>
            <p>useState,useEffect,useRef를 사용한 별찍기 구현</p>
            <hr />
            <div>
                <label htmlFor="rowNum">rowNum: </label>
                <input
                    type="number"
                    id='rowNum'
                    onChange={onRowNumChange}
                />
            </div>
            <hr />
            <div ref={console}>

            </div>
        </div>
    )
}

export default PrintStar;