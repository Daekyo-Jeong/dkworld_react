import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';

import '../../WorkContents.css';

function Work06() {
    return (
        <>
            <WorkIntro
                label="artwork"
                title="Salt Factory"
                date="2018.11 - 2018.12"
                field1="Development"
                field2="Interation Design"
                field3=""
                client1="Processing"
                client2="Arduino"
                client3="Garage band"
                src="saltfactory.png"
                statement="영화 '독전'에서 영감을 받아 제작한 사운드 인터랙션 프로젝트.
                 DJ들이 비트를 쌓는 것이 마치 화학약품을 이것저것 합성하며 실험하는 모습과 
                 닮았다고 생각했다. 비커의 물에 양에 따라 볼륨을 조절할 수 있고, 작업대에
                 비커를 올리고 내리는 것으로 비트를 실행할 수 있다."
            ></WorkIntro>
            <video src="../../videos/Salt Factory - The Moving Instrument.mp4" controls></video>
            <WorkTextBox 
            size="big"
            desc="'음악은 국가가 허락한 유일한 마약' 이라는 인터넷에 떠도는 농담처럼 하고싶었던 음악과 관련된 프로젝트를 했다."
            />
            <WorkImageBox
            size="max"
            src="saltfactory/saltfactory.png"
            ></WorkImageBox>
            <WorkTextBox 
            size="md"
            desc="들고 다니면서 퍼포먼스를 할 수 있는 무언가를 구상했다. 음악을 재생하는 행위 자체가 퍼포먼스가 될 길 바랐다."
            />
            <WorkImageBox
            size="max"
            src="saltfactory/saltfactory-algorithm.png"
            ></WorkImageBox>
            <WorkTextBox 
            size="md"
            desc="센서를 판별하는 아두이노와 음악을 재생하는 프로세싱을 연동하여서 데이터를 송수신한다. 
            압력센서를 통해서, 물의 양에 비례하여 음악의 볼륨을 조절할 수 있다. "
            />
        </>
    )
}

export default Work06
