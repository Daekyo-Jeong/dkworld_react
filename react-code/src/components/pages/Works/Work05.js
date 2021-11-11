import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';
import ReturnToWorks from '../../ReturnToWorks';
import '../../WorkContents.css';

function Work05() {
    return (
        <>
            <WorkIntro
                label="artwork"
                title="Food A Cappella"
                date="2018.05 - 2018.06"
                field1="Interaction Design"
                field2="Performance"
                field3="Music"
                client1="Processing"
                client2="Leap motion"
                client3="Photoshop"
                src="foodacappella.png"
                statement="어릴 적 학교에서 친구들과 음식 재료들의 이름을 반복해서 노래로
                만들던 기억을 되살려 진행한 프로젝트이다. 립 모션을 활용하여 관객이 손을 이용하여
                가운데의 냄비로 음식을 가져와 요리할 수 있다. 각각의 재료가 담기면 음식 이름으로 노래를 하는
                지정된 사운드가 출력된다. 또 요리 별로로 조합을 지정해 두어서 특정 조합이 완성되면 사운드와
                함께 이미지가 재생된다."
            ></WorkIntro>
            <video src="../../videos/Food A Cappella.mp4" controls></video>
            <WorkTextBox
            size="md"
            desc="키보드, 마우스를 제외한 인풋 방법으로 프로젝트를 완성하는 것이 목표였다.
            마치 요리를 하는 듯한 느낌을 줄 수 있도록 손동작을 인식하는 '립 모션'을 활용하여 제작했다.
            맛있는 음식을 만들 때의 기쁨을 표현했다."
            ></WorkTextBox>
            <WorkImageBox
            size="max"
            src="foodacapella/background.jpg"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="왼쪽부터 떡, 라면, 햄, 계란, 김치, 밥, 두부 순으로 나열되어 있다.
            냄비에 재료를 옮기면, 각각의 재료에 해당하는 사운드가 재생된다."
            ></WorkTextBox>
             <WorkImageBox
            size="over"
            src="foodacapella/foodacappella-algorithm.png"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="립 모션을 통해 손동작을 감지하고, 음식을 손으로 쥐어 냄비 속에 집어넣으면 음악이 재생된다."
            ></WorkTextBox>
           <ReturnToWorks/>
        </>
    )
}

export default Work05
