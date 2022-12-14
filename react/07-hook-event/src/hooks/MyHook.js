import React from 'react'
/**
 * 
 *  사용자 정의 함수.
 *  useState와 useEffect를 하나의 함수로 묶는 용도로 정의함
 */

const useMyWidth = () => {
    //  브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);
    const onMyResize = () => setMyWidth(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize)
    },[]);
    return myWidth;
};

export default useMyWidth;