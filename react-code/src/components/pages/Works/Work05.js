import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkImageBoxGrid from '../../WorkImageBoxGrid';
import WorkTextBox from '../../WorkTextBox';
import ImageSlider from '../../ImageSlider';

import '../../WorkContents.css';

const slideImageList = [
    {
        id: "univ1",
        src:"../../images/works_images/universe/business card mockup_3.jpg"
    },
    {
        id: "univ2",
        src:"../../images/works_images/universe/business card mockup_1.jpg"
    },
    {
        id: "univ3",
        src:"../../images/works_images/universe/business card mockup_2.jpg"
    }
]

function Work04() {
    return (
        <>
            <WorkIntro
                label="artwork"
                title="Universe"
                date="2018.03 - 2018.04"
                field1="Graphic Design"
                field2="Interation Design"
                field3=""
                client1="Java"
                client2="Photoshop"
                client3=""
                src="../../images/dk_w_rld_logo5.jpg"
                statement="프로그래밍을 이용한 2D 편집 디자인. 
                홍익대학교 학생들에게 '학번'이라는 고유번호가 있고, 
                개개인마다 학번을 이용해 각자의 로고를 이용한 명함 제작 프로젝트"
            ></WorkIntro>
            <WorkImageBox
            size="over"
            src="universe/neon-long.jpg"
            ></WorkImageBox>
            <WorkTextBox
            size="big"
            desc="본인의 학번을 이용한 명함 작업"
            ></WorkTextBox>
            <WorkImageBox
            size="max"
            src="universe/mix.gif"
            ></WorkImageBox>
            <WorkImageBoxGrid
            src1="universe/card2.jpg"
            src2="universe/card.jpg"
            />
           <ImageSlider list="3" img={slideImageList}/>
            <WorkTextBox
            size="md"
            desc="우주라는 작품의 이름은 각자의 개성이자 성격, 가치관 등을 의미하며 고유한 학번과 닮아 있는 
            개개인의 우주를 품고 있습니다."
            ></WorkTextBox>
        </>
    )
}

export default Work04
