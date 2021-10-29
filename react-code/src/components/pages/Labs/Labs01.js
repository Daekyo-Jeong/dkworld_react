//react-component-imageSlider
import React from 'react';
import ImageSlider from '../../ImageSlider';
import WorkTextBox from '../../WorkTextBox';
import LabIntro from '../../LabIntro';

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
    margin: "0px auto",
    border: "1px solid red",
    maxWidth: "1000px"
}

function Labs01() {
    return (
        <>
        <LabIntro
        titlee="imageSlider"
        titlek="이미지 슬라이더"
        funcdesc="좌우 버튼을 누르면, 해당하는 버튼에 따라 이미지가 좌우로 이동하면서 다음 이미지로 변경"
        updatedesc={`2021.10.19 - ver 0.1 \n 2021.10.20 - ver 0.2 \n 2021.10.27 - ver 0.3 \n : 슬라이드 버튼 컬러 선택자 추가`}/>
        <div style={style}>
            <ImageSlider img={imageArray} list='4' color="black"/>
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
