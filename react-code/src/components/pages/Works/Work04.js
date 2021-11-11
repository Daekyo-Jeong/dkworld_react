import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';
import ImageSlider from '../../ImageSlider';
import ReturnToWorks from '../../ReturnToWorks';

import '../../WorkContents.css';

const slideImageList = [
    {
        id: "moon1",
        src:"../../images/works_images/moonecklace/moonecklace1.jpg"
    },
    {
        id: "moon2",
        src:"../../images/works_images/moonecklace/moonecklace2.jpg"
    },
    {
        id: "moon3",
        src:"../../images/works_images/moonecklace/moonecklace3.jpg"
    },
    {
        id: "moon4",
        src:"../../images/works_images/moonecklace/moonecklace4.jpg"
    },
    {
        id: "moon5",
        src:"../../images/works_images/moonecklace/moonecklace5.jpg"
    }
]


function Work04() {
    return (
        <>
            <WorkIntro
                label="artwork"
                title="Moonecklace"
                date="2018.09 - 2018.10"
                field1="Development"
                field2="Interation Design"
                field3="Physical Media"
                client1="Java"
                client2="Arduino"
                client3=""
                src="moonecklace.png"
                statement="달을 형상화한 블루투스 펜던트. 블루투스 페어링이 됐을 때가 아닌 되지 않았을 때에
                주목한 프로젝트이다. 시 '권대웅 - 아득한 한 뼘'에서 영감을 받아 시의 느낌을 표현하고자 했다."
            ></WorkIntro>
           <ImageSlider list="5" img={slideImageList} color="white"/>
            <WorkImageBox
            size="over"
            src="moonecklace/moonecklace-algorithm.png"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="무한히 작동하는 루프 알고리즘이다. 기기 간 페어링 여부를 판단하고,
            페어링 됐을 때는 'breathing' 효과 작동 후 대기모드로 들어간다. 페어링 되지 않았을 때는 시간에 비례하여
            펜던트에 달의 형상이 차오르도록 설계했다."
            ></WorkTextBox>
            <ReturnToWorks/>
        </>
    )
}

export default Work04
