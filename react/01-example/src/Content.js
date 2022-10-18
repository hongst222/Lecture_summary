import React from "react";
import Sidebar from './Sidebar.js';
import Main from './Main';

const Content = () => {
    return(
        <div id = 'Content'>
            <Sidebar/>
            <hr/>
            <Main/>
        </div>
    );
};

export default Content;