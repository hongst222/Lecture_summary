import React, { memo } from 'react';
import styled from 'styled-components';
import myData from '../../Data';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import mq from '../../MediaQuery';

/** components */
import DataPath from '../../components/DataPath';
import { useCallback } from 'react';
import classNames from 'classnames';

const MyFoodContainer = styled.div`
          width: 100%;
          padding: 0 16px;
          margin-bottom: 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .tbnl_wrap{
            width:100%;
            height: auto;
            min-height: 1300px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
          
            .tbnl {
                width: 25%;
                min-width: 280px;
                max-width: 350px;
                padding: 8px;
                box-sizing: border-box;
                flex: 1 1 auto;

                img {
                    width: 100%;
                }

                h3,p {
                    display: block;
                    margin: 15px 0;
                    text-align: center;
                }
                h3 {
                    font-size: 26px;
                }
            }
        }
        .myfood_bottom{
          bottom: 0;
        display: flex;
        justify-content: center;
        padding: 32px 0;
        box-sizing: border-box;

        a {
            padding: 12px 20px;
            box-sizing: border-box;

            text-decoration: none;
            color: black;
            font-size: 22px;
            
            &:hover {
                background-color: black;
                color: white;
            }
            &.active{
              background-color: black;
              color:white;
            }
        }
        }
`
// 변수들
const len = myData.length;

const MyFood = memo(() => {
  /** state */
  const [pageNum, setPageNum] = React.useState(1);
  const location = useLocation();
  const ref = React.useRef();

  // Effect, memo 
  const URL = React.useMemo(() => {
    return (+(location.pathname.substring(1)));
  }, [location])
  React.useEffect(() => {
    URL !== 0 ? setPageNum(URL) : setPageNum(1);

  }, [URL]);

  const standard = React.useMemo(() => {
    return (Math.floor((pageNum - 1) / 4) + 1) * 4
  }, [pageNum]);



  /** pageNum이 바뀔때 마다 버튼 새로 생성(active를 위함) */
  const createBtn = React.useMemo(() => {
    let a = [];
    let arrow = ["<<", ">>"];
    let i = standard - 3;
    let standard2 = standard - 4 <= 0 ? "" : standard - 4;
    a.push(<Link to={"/" + (standard2)}   >{arrow[0]}</Link>);

    while (i <= standard && i <= len) {
      const cls1 = classNames({
        'active': URL === 0
      })
      const cls2 = classNames({
        'active': i === URL
      });
      i !== 1 ? a.push(<Link to={"/" + i} className={cls2} >{i}</Link>) : a.push(<Link to={"/"} className={cls1} >{i}</Link>);

      i++;
    }
    a.push(<Link to={"/" + (standard + 1 <= len ? standard + 1 : len)}  >{arrow[1]}</Link>);
    return a;
  }, [pageNum]);



  return (
    <MyFoodContainer id= 'myfood'>
      <Routes>
        <Route path="/" element={<DataPath />} />
        <Route path="/:numbering" element={<DataPath />} />
      </Routes>
      <div className='myfood_bottom'>
        {createBtn}
      </div>
      <div>{pageNum},{standard}</div>
    </MyFoodContainer>

  );
});

export default MyFood;