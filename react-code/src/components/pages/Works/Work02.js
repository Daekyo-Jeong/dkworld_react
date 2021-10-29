import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkImageBoxGrid from '../../WorkImageBoxGrid';
import WorkTextBox from '../../WorkTextBox';
import ImageSlider from '../../ImageSlider';
import '../../WorkContents.css';

const slideImageList = [
    {
        id: "1",
        src:"../../images/works_images/breathe/breathe-poster.png"
    },
    {
        id: "2",
        src:"../../images/works_images/breathe/breathe-banner.png"
    },
    {
        id: "3",
        src:"../../images/works_images/breathe/artbook.jpg"
    },
    {
        id: "4",
        src:"../../images/works_images/breathe/exhibition1.jpg"
    },
    {
        id: "5",
        src:"../../images/works_images/breathe/10.jpg"
    }
];

function Work02() {
    return (
        <>
            <WorkIntro
                label="branding"
                title="Breathe"
                date="2019.03 - 2019.12"
                field1="Web development"
                field2="UX/UI design"
                field3="Branding"
                client1="html/css/js"
                client2="Illustrator"
                client3="Photoshop"
                src="../../images/works_images/breathe/breathe.jpg"
                statement="4차 산업혁명이 어느 때보다 다양한 분야에서 무르익고 있는 현재,
                어쩌면 디지털미디어는 살아 숨 쉬게 되었습니다. (media comes alive) 
                디지털미디어디자인 전공 학생들은 디지털미디어에 
                그리고 세상에 숨결을 불어 넣습니다. (breathe into the world)"
            />
            <WorkImageBox
            size="over"
            src="breathe/07.gif"
            />
            <WorkImageBox
            size="over"
            src="breathe/03.gif"
            />
            <WorkTextBox
            size="md"
            desc="브랜드 전반에 숨이라는 느낌을 효과적으로 표현하기 위해 은은하고 
            미묘한 느낌의 톤 앤 매너와 디지털적인 요소가 함께 느껴질 수 있도록 
            강렬하지 않은 도트 파티클을 전반적으로 활용했습니다."
            />
            <WorkImageBox
            size="max"
            src="breathe/04.gif"
            />
            <WorkImageBox
            size="max"
            src="breathe/05.png"
            />
            <WorkImageBoxGrid
            src1="breathe/breathe_logo_exp.png"
            src2="breathe/breathe_logo_exp2.png"
            />
            <WorkTextBox
            size="md"
            desc={`숨이라 함은 흩날리고 불어지는 이미지가 떠오르기 마련입니다. 부드럽게 흔들리는 이미지와 반대로 전공의 대표 특징인 디지털은 곧고 빠릅니다. 
            우리는 이 상충하는 두 이미지를 모두 연상시킬 수 있는 심볼을 만드는 것에 집중했습니다. \n\n 
            디지털을 대표하는 대쉬와 닷, 숨결을 상징하는 바람 그리고 전시 네이밍의 이니셜. 이 요소들을 가지고 위와 같은 로고 심볼과 이를 응용한 로고 타입을 만들었습니다.`
            }
            />
            <ImageSlider list="5" img={slideImageList} color="black"/>
            <WorkTextBox
            size="md"
            desc="포스터, 배너, 도록 등 모든 어플리케이션에는 브랜드 아이덴티티가 일관되게 적용됩니다."
            />
            <WorkImageBox
            size="max"
            src="breathe/website_main.jpg"
            />
            <WorkTextBox
            size="md"
            desc="브랜딩과 동일한 톤 앤 매너와 그라데이션을 적극 활용하고 은은한 파티클들이 자유롭게 부유합니다.
            학생들의 작품을 담고 있는 중요한 그릇인 만큼 브랜딩의 컨셉이 잘 드러나길 고민했습니다."
            />
            <WorkImageBox
            size="max"
            src="breathe/website_mockup_m.jpg"
            />
            <WorkTextBox
            size="md"
            desc="웹사이트 전반에 걸쳐 화면전환, 로딩 화면 등에서도 숨 쉬는 것이 연상될 수 있도록 은은한 효과를 가집니다. 
            터치기반 플랫폼에서는 웹사이트가 보다 유연하게 동작할 수 있도록 일부 기능들을 축소하였습니다."
            />
            <video src="../../videos/breathe_website_usage.mp4" controls></video>
        </>
    )
}

export default Work02
