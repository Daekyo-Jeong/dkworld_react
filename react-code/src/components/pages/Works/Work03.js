import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';

import '../../WorkContents.css';

function Work03() {
    return (
        <>
            <WorkIntro
                label="artwork"
                title="Food A Capella"
                date="2018.05 - 2018.06"
                field1="Interaction Design"
                field2="Performance"
                field3="Music"
                client1="Java"
                client2="Leap motion"
                client3="Photoshop"
                src="../../images/dk_w_rld_logo3.jpg"
                statement="어릴적 학교에서 친구들과 음식 재료들의 이름을 반복해서 노래로 만들던 기억을 되살려
                진행한 프로젝트입니다. 립모션을 활용하여 관객이 손을 이용하여 가운데의 냄비로 음식을 가져와
                요리할 수 있습니다. 레시피에 따라 특정 조합이 완성되면 완성된 요리의 이미지와 사운드가 출력됩니다."
            ></WorkIntro>
            <video src="../../videos/Food A Cappella.mp4" controls></video>
            <WorkTextBox
            size="big"
            desc="키보드, 마우스를 제외한 인풋 방법으로 프로젝트를 완성하는 것이 목표였습니다.
            마치 요리를 하는 듯한 느낌을 줄 수 있도록 손동작을 인식하는 '립모션'을 활용하여 제작하였습니다.
            맛있는 음식을 만들때의 기쁨을 표현했습니다."
            ></WorkTextBox>
            <WorkImageBox
            size="max"
            src="foodacapella/background.jpg"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="왼쪽부터 떡, 라면, 햄, 계란, 김치, 밥, 두부 순으로 나열되어 있습니다.
            냄비에 재료를 옮기면, 각각의 재료에 해당하는 사운드가 재생됩니다."
            ></WorkTextBox>
             <WorkImageBox
            size="max"
            src="dk_w_rld/dk-architecture.jpg"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="알고리즘을 설명할 수 있는 이미지"
            ></WorkTextBox>
           
        </>
    )
}

export default Work03
