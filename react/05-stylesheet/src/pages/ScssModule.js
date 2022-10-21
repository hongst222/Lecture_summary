import React from 'react'

import myScssMod from '../assets/scss/style.module.scss';
const ScssModule = () => {
    return (
        <div>
            <h2>ScssModule</h2>
            <div className={[myScssMod.myScss]}>
                <div className={[myScssMod.myScssBox, myScssMod.red].join(' ')}></div>
                <div className={[myScssMod.myScssBox, myScssMod.green].join(' ')}></div>
                <div className={[myScssMod.myScssBox, myScssMod.blue].join(' ')}></div>
                <div className={[myScssMod.myScssBox, myScssMod.blue].join(' ')}></div>
                <div className={[myScssMod.myScssBox, myScssMod.orange].join(' ')}></div>
                <div className={[myScssMod.myScssBox, myScssMod.yellow].join(' ')}></div>
                <div className={[myScssMod.myScssBox, myScssMod.pink].join(' ')}></div>
            </div>
        </div>
    );
};

export default ScssModule;