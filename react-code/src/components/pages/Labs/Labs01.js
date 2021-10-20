//react-component-imageSlider
import React from 'react';
import ImageSlider from '../../ImageSlider';
import WorkTextBox from '../../WorkTextBox';

const imageArray = [
    {
        id: "1",
        src:"../../images/dk_w_rld_logo1.jpg"
    },
    {
        id: "2",
        src:"../../images/dk_w_rld_logo2.jpg"
    },
    {
        id: "3",
        src:"../../images/dk_w_rld_logo3.jpg"
    },
    {
        id: "4",
        src:"../../images/dk_w_rld_logo4.jpg"
    },
]

const style = {
    margin: "50px auto",
    border: "1px solid red",
    maxWidth: "1000px"
}

function Labs01() {
    return (
        <>
        <h1>imageSlider</h1>
        <h1>이미지 슬라이더</h1>
        <br />
        <h2>example</h2>
        <h2>예시</h2>
        <div style={style}>
            <ImageSlider img={imageArray} list='4'/>
        </div>
        <WorkTextBox
        desc={`다음∙이전 버튼을 누른다.
        ‣ 슬라이드 번호를 변경한다. \n
        슬라이드 번호가 변경된 것이 감지된다. 
        ‣ 슬라이드의 X값을 이동한다.`}
        size="md"
        />
        </>
    )
}

export default Labs01
