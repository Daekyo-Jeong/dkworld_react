import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import ImageSlider from '../../ImageSlider';

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


function Work07() {
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
                src="../../images/works_images/cover/moonecklace.png"
                statement="달을 형상화한 블루투스 펜던트. 블루투스 페어링이 됐을 때가 아닌 되지 않았을 때에
                주목한 프로젝트입니다. 시 '권대웅 - 아득한 한 뼘'에서 영감을 받아 시의 느낌을 표현하고자 했습니다.
                소중한 사람이 가까이 있지 않아도 달을 보며 소중한 사람에 대한 그리움을 그리는 펜던트입니다."
            ></WorkIntro>
           <ImageSlider list="5" img={slideImageList} color="white"/>
            <WorkImageBox
            size="max"
            src="moonecklace/moonecklace-algorithm.png"
            ></WorkImageBox>
            알고리즘 이미지
        </>
    )
}

export default Work07
