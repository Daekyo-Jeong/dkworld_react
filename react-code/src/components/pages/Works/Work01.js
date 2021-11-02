import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';

import '../../WorkContents.css';

function Work01() {
    return (
        <>
            <WorkIntro
                label="develpopment"
                title="dk_w_rld"
                date="2021.09 - ing"
                link="http://daekyojeong.com"
                linkname="daekyojeong.com"
                field1="Web development"
                field2="UX/UI design"
                field3="Branding"
                client1="React"
                client2="html/css/js"
                client3="Photoshop"
                src="dk_w_rld.jpg"
                statement="개인 작업물 아카이브를 목적으로 진행된 웹 개발 프로젝트. 효과적으로
                작품과 '나' 라는 사람을 전달할 수 있도록 퍼스널 브랜딩을 겸하여
                웹사이트에 아이덴티티를 부여했다. React를 활용해서 추후 작업물을 업데이트하고,
                관리할 수 있도록 UI를 컴포넌트화 하여 유지보수에 도움될 수 있도록 작업했다."
            />
            <WorkImageBox
            size="over"
            src="dk_w_rld/dk-identity.jpg"
            />
            <WorkTextBox
            size="big"
            desc="나는 호기심이 많아, 궁금한 것에 대한 집요한 관심을 가진다. 
            정돈된 코드와 문서화된 규칙을 좋아하면서도 개성있는 디자인과 자유로움을 추구한다. 
            나는 규칙적이면서도, 규칙적이지 않은 웹사이트를 만들고 싶었다."
            />
            <WorkImageBox
            size="max"
            src="dk_w_rld/dk_w_rld-logo-animation.gif"
            />
            <WorkTextBox
            size="md"
            desc="홈페이지에서 만나볼 수 있는 로고이자, 웹사이트의 이름. 
            단순하게 텍스트로 이루어진 로고이지만, 애니메이션 효과로 아이덴티티를 담고 있다."
            />
            
            <WorkImageBox
            size="over"
            src="dk_w_rld/dk-type-color-system.jpg"
            />
            <WorkTextBox
            size="md"
            desc="웹사이트 전반에 '기호'를 사용하지 않고, 정제된 글과 색으로만 구성되도록 디자인하였다. 
            겉으로 보기에 따분하고 정돈된 웹사이트 처럼 보이지만, 강렬한 형광색 컬러의 동적인 효과들로 
            내면의 숨겨진 개성을 담고자했다."
            />
            <WorkImageBox
            size="max"
            src="dk_w_rld/dk-architecture.jpg"
            />
            <WorkTextBox
            size="md"
            desc="페이지간 이동은 네비게이션을 통해서 이동이 가능하다.
            방문자의 관심도에 따라, 홈 화면에서 해당하는 페이지로 이동이 가능하도록 설계되었다."
            />
            <WorkImageBox
            size="max"
            src="dk_w_rld/dk-web.gif"
            />
            <WorkTextBox
            size="md"
            desc="홈페이지에서는 모든 컨텐츠를 요약해서 대략적으로 확인할 수 있다.
             관심도에 따라 작품이나 소개 페이지으로 바로 이동이 가능하고, 메뉴를 통해서 페이지 이동이 가능하다."
            />
            <WorkImageBox
            size="over"
            src="dk_w_rld/iphone12-line-mockup.png"
            />
            <WorkImageBox
            size="max"
            src="dk_w_rld/iphone12-line-mockup-vertical.png"
            />
            <WorkTextBox
            size="md"
            desc="화면 크기에 따라 그리드는 가변적으로 변하지만 일관된 느낌을 전달한다."
            />
        </>
    )
}

export default Work01
