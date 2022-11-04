import React from 'react';
import styled from 'styled-components';

import img01 from '../assets/img/img01.jpg';
import img02 from '../assets/img/img02.jpg';
import img03 from '../assets/img/img03.jpg';
import img04 from '../assets/img/img04.jpg';
import img05 from '../assets/img/img05.jpg';


/** 썸네일 리스트에 대한 styledComponent */
const ThumbList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 640px;
    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:after {
        content: '';
        display: block;
    }
    li {
        width: 20%;
        
        a {
            display: block;
            margin: 10px;

            img {
                width: 100%;
            }
        }
    }
`

/** 이미지 뷰어 영역에 대한 StyledComponent */
const Viewer = styled.div`
    width: 620px;
    margin: auto;
    padding: 0 10px;

    img{
        width: 100%;
        object-fit: cover;
    }
`;
const imgList = [
    { img: img01, title: '테스트이미지1' },
    { img: img02, title: '테스트이미지2' },
    { img: img03, title: '테스트이미지3' },
    { img: img04, title: '테스트이미지4' },
    { img: img05, title: '테스트이미지5' },
];
const ImageEx = () => {

    /** state */
    const [currentIndex, setCurrentIndex] = React.useState(0);
    // 썸네일로 표시할 이미지와 제목에 대한 JSON 배열
    
    // 썸네일 이미지의 링크를 클릭했을 경우 동작할 이벤트 리스너
    const onThumbnailClick = e => {
        const href =e.currentTarget.getAttribute(`href`);
        const idx = parseInt(href.substring(1));
        console.log(idx);
        setCurrentIndex(idx);
    }

    //currnetIndex값이 변경되었을 때에 후속 처리
    // img, title
    // CurrentImg로 받아서 .img .title
    // 
    const {img: currentImg, title: currentTitle} = React.useMemo(() => {
        return imgList[currentIndex];
    }, [imgList, currentIndex]);

    
    return (
        <div>
            <h2>ImageEx</h2>

            {/* 썸네일 리스트 표시하기 */}
            <ThumbList>
                {imgList.map((v,i) => {
                    return(
                        <li key={i}>
                            <a href={`#${i}`} title= {v.title} onClick = {onThumbnailClick}>
                                <img src={v.img} alt={v.title}/>
                            </a>
                        </li>
                    )
                })}
            </ThumbList>

            {/* 이미지 뷰어 */}
            <Viewer>
                <img src={currentImg} alt={currentTitle}/>
            </Viewer>
        </div>
    );
}

export default ImageEx;