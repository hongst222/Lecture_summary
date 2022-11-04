import React from 'react';
import { useParams } from 'react-router-dom';
import myData from '../Data.js';

const DataPath = () => {

    const params = useParams();
    let idxNum = params.numbering;
    if (!idxNum) {
        idxNum = 1;
    }


    const createComponents = (element) => {
        return element.map((v2, i2) => {
            return (
                    <div key={100 + i2} className='tbnl'>
                        <img src={v2.img} alt={v2.title} />
                        <h3>{v2.title}</h3>
                        <p>{v2.description}</p>
                    </div>
            );
        });
    }

    return (
        <div className='tbnl_wrap'>
            {/* idxNum은 1부터 시작이기 때문이다. */}
            {createComponents(myData[idxNum-1])}
        </div>
    )
}


export default DataPath;