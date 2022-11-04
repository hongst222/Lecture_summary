import React from 'react';

const useMounterdRef = () => {
    const mountedRef = React.useRef(false);

    React.useEffect(() => {
        setTimeout(() => {
            mountedRef.current = true;
        });
    },[]);
    return mountedRef;
};

export default useMounterdRef;