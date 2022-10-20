import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data.js';
const DataPath = () => {
    const params = useParams();
    const listName = params.lN;
    const head = Object.keys(Data[listName][0]);
    const createListItems = (v) => {
        let tr = [];
        let i = 0;
        for (const k in v) {
            let dt = v[k];
            if(k==='idnum'){
                dt = v[k].substring(0,6) +"-*******";
            } 
            tr.push(<td key={i}><strong>{dt}</strong></td>);
            i++;
        }
        return tr;
    }
    return (
        <div>
            <h2>학과정보</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr>
                        {head.map(v => {
                            return (<td>{v}</td>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Data[listName].map((v, i) => {
                        console.log(v);
                        return (
                            <tr key={i}>{createListItems(v)}</tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DataPath