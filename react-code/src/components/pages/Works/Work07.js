import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';
import ImageSlider from '../../ImageSlider';
import ReturnToWorks from '../../ReturnToWorks';

import '../../WorkContents.css';

const slideImageList = [
    {
        id: "lima1",
        src:"../../images/works_images/lima/lima banner mockup.jpg"
    },
    {
        id: "lima2",
        src:"../../images/works_images/lima/lima ticket mockup.jpg"
    },
    {
        id: "lima3",
        src:"../../images/works_images/lima/lima-pictogram-ver0.4.png"
    }
]

function Work07() {
    return (
        <>
            <WorkIntro
                label="branding"
                title="LIMA Duolympic"
                date="2015.10 - 2015.12"
                field1="Graphic Design"
                field2="Branding"
                field3=""
                client1="Illustrator"
                client2="Photoshop"
                client3=""
                src="limaolympic.png"
                statement="기존의 올림픽이 가지고 있는 문제점을 해결할 수 있는 새로운 개최 방안인
                 '듀올림픽'을 제시하고, 가상으로 듀올림픽이 치러질 2024 하계 올림픽 브랜딩 프로젝트."
            ></WorkIntro>
            <WorkImageBox
            size="max"
            src="lima/lima-logo-all.png"
            ></WorkImageBox>
            <WorkTextBox
            size="big"
            desc="스페인과 포르투갈이 공동으로 개최하는 2024 리스본 마드리드 듀올림픽에 초대합니다!"
            ></WorkTextBox>
            <WorkImageBox
            size="max"
            src="lima/logo-analysis.png"
            ></WorkImageBox>
            <WorkImageBox
            size="max"
            src="lima/typo-analysis.png"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="서체는 로고의 형태에서 차용하여, 공식 서체를 올림픽 브랜드에 보다 어울리도록 디자인하였다."
            ></WorkTextBox>
           <ImageSlider list="3" img={slideImageList} color="black"/>
           <WorkTextBox
            size="md"
            desc="올올림픽에서 사용되는 애플리케이션 배너, 티켓, 픽토그램 또한 로고의 형태에서 착안하여 리스본과 마드리드의
            분위기가 잘 드러날 수 있도록 디자인하였다."
            ></WorkTextBox>
            <ReturnToWorks/>
        </>
    )
}

export default Work07
