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
                client1="Processing"
                client2="Photoshop"
                client3=""
                src="universe.png"
                statement="프로그래밍을 이용한 2D 편집 디자인. 
                홍익대학교 학생들에게 '학번'이라는 고유번호가 있고, 
                개개인마다 학번을 이용해 각자의 로고를 이용한 명함 제작 프로젝트"
            />
            <WorkImageBox
            size="over"
            src="universe/neon-long.jpg"
            />
            <WorkTextBox
            size="big"
            desc="0-9 까지 숫자에 대응되는 각 행성들의 모습은, 각기 다른 형상을 띄고 있다."
            />
            <WorkImageBox
            size="max"
            src="universe/mix.gif"
            />
            <WorkImageBoxGrid
            src1="universe/card2.jpg"
            src2="universe/card.jpg"
            />
           <ImageSlider list="3" img={slideImageList} color="white"/>
            <WorkTextBox
            size="md"
            desc="우주라는 작품의 이름은 각자의 개성이자 성격, 가치관 등을 의미하며 고유한 학번과 닮아 있는 
            개개인의 우주를 의미한다."
            />
            <WorkImageBox
            size="max"
            src="universe/universe-algorithm.png"
            />
            <WorkTextBox
            size="md"
            desc="키보드를 통해 조작이 가능하다. Print를 의미하는 P키를 누르면 현재의 화면을 PDF로 저장할 수 있다.
             숫자를 누르면 해당하는 행성들이 화면에 나타나고, 백 스페이스 키를 눌러 나타난 행성들을 지울 수도 있다."
            />
        </>
    )
}

export default Work04
