import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import btn from '../assets/img/btn.png';
import btnOver from '../assets/img/btn_over.png';

const MenuContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    .link {
        display: block;
        width: 179px;
        height: 48px;
        background: url(${btn});
        line-height: 48px;
        text-align: center;
        font-weight: bold;
        color: #cfdfb5;
        text-decoration: none;

        &:hover {
            background: url(${btnOver});
        }
    }
    
    .menu-item {
        flex: 0 0;
        
        /** 서브메뉴의 기준점을 부모요소로 지정하기 위한 처리 */
        position: relative;

        /** 서브메뉴가 펼쳐지더라도 다른 요소들 위에 떠 있어야 하므로 position: absolute 처리 */
        .sub {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            z-index: 1000;
            max-height: 0;
            overflow: hidden;
            transition: max-height 180ms ease-out;
        }
    }
`;

const SubmenuEx = memo(() => {
    const onMenuItemOver = useCallback((e) => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        // scrollHeight는 요소의 크기를 벗어난 만큼의 높이를 의미
        sub.style.maxHeight = sub.scrollHeight + 'px';

    }, []);

    const onMenuItemOut = useCallback((e) => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        sub.style.maxHeight = null;
    }, []);

    const ListMake = [
        {
            title: 'Frontend',
            subtitle: ['HTML+CSS', 'Javascript', 'JQuery'],
        },
        {
            title: 'Backend',
            subtitle: ['PHP', 'JSP', 'Node.js'],
        },
        {
            title: 'Mobile',
            subtitle: ['IOS', 'Android', 'Hybrid'],
        }
    ]

    return (
        <div>
            <h2>SubmenuEx</h2>
            <MenuContainer>


                {ListMake.map((v, i) => {
                    return (
                        <div key={1000 + i}>
                            <li className="menu-item" onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                                
                                <Link to='#' className='link'>{v.title}</Link>
                                
                                <ul className='sub'>
                                    {v.subtitle.map((v2, i2) => {
                                        return (
                                            <li key={2000 + i2}>
                                                <Link to="#" className='link'>{v2}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                            </li>
                        </div>
                    );
                })};

            </MenuContainer>
            <h1>Hello World</h1>
        </div>
    );
});

export default SubmenuEx;