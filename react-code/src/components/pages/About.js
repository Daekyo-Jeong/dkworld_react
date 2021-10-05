import React from 'react';
import '../About.css';

function About() {
    return (
       <>
       <div className="about-greeting">
           <div className="about-greeting--en">
                <p>Hello.</p>
                <p><span className="outline-text">Designer</span>ㅤ―ㅤ<span className="outline-text">Developer</span></p>
                
                <p>I want to close the gap.</p>
                <p>I'm Daekyo Jeong.</p>
            </div>
            <div className="about-greeting--ko">
                <p>안녕하세요.</p>
                <p className="about-greeting__dd--virtical--ko"><span className="outline-text">디자이너
                <br />
                </span>ㅤ │ㅤ<span className="outline-text">
                <br/>
                디벨로퍼</span></p>
                <p className="about-greeting__dd--ko"><span className="outline-text">디자이너</span>ㅤ―――ㅤ<span className="outline-text">디벨로퍼</span></p>
                <p>간극을 좁혀보고픈</p>
                <p>정대교입니다.</p>
            </div>
        </div>
        <div className="about-introduce">
            <h1>저는 이런 사람입니다.</h1>
            <br />
            <p>프론트엔드 개발과 디자인, 사용자 경험・인터페이스 디자인에 <br/>관심이 있고 다양한 인터랙션 디자인을 공부하고 있습니다.</p>
            <br />
            <p><span className="bold-text">새로운 것을 탐구하고 배우는 것에 상당한 흥미</span>를 느낍니다.</p>
            <p><span className="bold-text">문제해결에 집요한 시간</span>을 쏟습니다.</p>
            <p>저의 호기심과 집요함은 디자인적 역량을 바탕으로 <br/>
            <span className="bold-text">좋은 인터랙션에 접근하기 위해 끈임없이 고민</span>합니다.</p>
            <br />
            <p>끈임없이 고민했던 노력의 흔적을 내 손으로 구현할 수 있다는 것이 <br/>디벨로퍼라는 역할은 매력적으로 다가왔습니다.</p>
            <p>사용자의 입장에서 끈임없이 고민하는 <br /><span className="bold-text">인터랙션 디자이너이자 풀스택 디벨로퍼</span>를 꿈꾸고 있습니다.</p>
            <br />
            <p>dk_w_rld@naver.com</p>
        </div>
        <div className="about-table">
            <Table 
            title="경력">
            <TableData 
            date="20.03 - 21.01"
            desc="홍익대학교 디자인컨버전스학부 실습조교"/></Table>

            <Table 
            title="학력">
            <TableData 
            date="14.03 - 20.02"
            desc="홍익대학교 디지털미디어디자인전공 졸업"/></Table>

            <Table 
            title="경험">
            <TableData 
            date="18.12 - 19.12"
            desc={"[봉사] 디지털미디어디자인전공 졸업준비 위원회 \n 위원장"}/>
            <TableData 
            date="18.03 - 18.12"
            desc={"[봉사] 디지털미디어디자인전공 학생회 \n 기획부원"}/>
            <TableData 
            date="18.03 - 18.12"
            desc={"[소모임] 인스톨레이션 소모임 '비본' \n 스튜디오 팀장"}/>
            <TableData 
            date="18.06 - 18.08"
            desc={"[전시] 홍익대학교 거리미술전 \n 작품 '동전의 공중회전' 제작 및 설치"}/></Table>

            <Table 
            title="수상">
            <TableData 
            date="18.11"
            desc="조형대학 창립 30주년 과제전 3학년 대표 우수상"/>
            <TableData 
            date="15.08"
            desc="세상을 바꾸는 인포그래픽 우수상"/></Table>
        </div>
       </>
    )
}

function Table(props) {
    return(
        <>
        <div className="table">
            <h2 className="table-title">{props.title}</h2>
            <div className="table-grid">{props.children}</div>
        </div>
        </>
    )
}

//\n 문자열을 기준으로 텍스트를 분할하여서 하단에 br태그를 추가해주는 방식
function TableData(props){
    return(
        <>
        <p className="table-date">{props.date}</p>
        <p className="table-desc">
            {props.desc.split("\n").map((txt) => (
            <>
                {txt}
                <br />
            </>
            ))}
            </p>
        </>
    )
}

export default About;
