import React from 'react';
import MyChildrenSub from '../Components/MyChildrenSub';
import Meta from '../Components/Meta';
const MyChildren = () => {
  return (
    <div>
      <Meta title='MyChildren.js' description="여기는 MyChildren.js파일" />
      <h2>MyChildren</h2>
      <MyChildrenSub width = {400} height = {100}><b>Hello World</b></MyChildrenSub>
      <MyChildrenSub width = {300} height = {80}>안녕 리액트</MyChildrenSub>
      <MyChildrenSub width = {200} height = {50}/>
    </div>
  )
}

export default MyChildren