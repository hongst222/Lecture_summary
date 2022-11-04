import React, {useMemo, memo, useState, useCallback} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';


const TabContainer = styled.div`
    .tab-button-group {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        display: flex;

        .tab-button {
            display: block;
            background-color: inherit;
            min-width: 100px;
            box-sizing: border-box;
            border: none;
            outline: none;
            padding: 14px 16px;
            font-size: 17px;
            color: #222;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &:hover{
                background-color: #ddd;
            }
            &.active{
                background-color: #ccc;
            }
        }
    }

    .tab-page{
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
`;

const tabContent = [
    {
        id: 'newyork',
        subject: 'NewYork',
        content: 'NewYork is the capital city of US.'
    },
    {
        id: 'london',
        subject: 'London',
        content: 'London is the capital city of England.'
    },
    {
        id: 'paris',
        subject: 'Paris',
        content: 'Paris is the capital city of France.'
    },
    {
        id: 'seoul',
        subject: 'Seoul',
        content: 'Seoul is the capital city of Korea.'
    }
];



const TabEx = memo(() => {
    /** 현재 표시되고 있는 탭의 인덱스 번호 */
    const [tabIndex, setTabIndex] = useState(0);

    const onTabButtonClick = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const href = current.getAttribute('href');
        setTabIndex(tabIndex => tabContent.findIndex(e => `#${e.id}` === href ));
    },[]);

    const {subject:curSubject, content:curContent} = useMemo(() => {
        return tabContent[tabIndex];
    },[tabIndex]);

    return (
        <div>
            <h2>TabEx</h2>
            {/* Tab버튼 그룹 */}
            <TabContainer>
            <div className="tab-button-group">
                {tabContent.map((v,i) => {
                    
                    // 조건부 className을 적용하기 위한 객체 생성
                    const cls = classnames({
                        'tab-button' : true,
                        'active': i === tabIndex,
                    });

                    return (
                        <a key = {i} className = {cls} href={`#${v.id}`} onClick = {onTabButtonClick}>
                            {v.subject}
                        </a>
                    );
                })}
            </div>
            {/* Tab 페이지 영역 */}
            <div className='tab-page'>
                <h3>{curSubject}</h3>
                <p>{curContent}</p>
            </div>
            </TabContainer>
        </div>
    );
});

export default TabEx;
