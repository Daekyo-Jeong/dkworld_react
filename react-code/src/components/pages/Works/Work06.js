import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';

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
                client1="Java"
                client2="Garage band"
                client3=""
                src="../../images/works_images/saltfactory/saltfactory-title.png"
                statement="영화 '독전'에서 영감을 받아 제작한 사운드 인터랙션 프로젝트입니다.
                 DJ들이 비트를 쌓는 것이 마치 화학약품을 이것저것 합성하며 실험하는 모습과 
                 닮았다고 생각했습니다. 비커의 물에 양에 따라 볼륨을 조절할 수 있고, 작업대에
                 비커를 올리고 내리는 것으로 비트를 실행할 수 있습니다."
            ></WorkIntro>
            <video src="../../videos/Salt Factory - The Moving Instrument.mp4" controls></video>
            <WorkImageBox
            size="max"
            src="saltfactory/saltfactory.png"
            ></WorkImageBox>
            <WorkImageBox
            size="max"
            src="moonecklace/moonecklace-algorithm.png"
            ></WorkImageBox>
            알고리즘 이미지
        </>
    )
}

export default Work06
