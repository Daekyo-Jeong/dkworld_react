# dk_w_rld React Project

<br>

이 프로젝트는 dk_w_rld 웹사이트를 `react` 를 이용ㅐ해 구현합니다.
<br>
아래 내용은 타임라인에 따른 `pathnote` 입니다.

<br>

## 20211110 - 20211111
### pathnote
<br>

__main__
- 작품으로 가는 카드 수정
<br>
: 링크의 범위를 넓혀서 제목을 선택해도 이동할 수 있도록 수정
- 모바일에서 작품 이미지 선택이 안되던 버그 수정
- 링크 디자인 통일

__nav__
- nav item hover 효과 텍스트 길이만큼만 표현

__about__
- 소개글 모션효과 추가
<br>
: useState 사용하지 않고, css 애니메이션 효과로 설정

__work__
- 작품 상세 페이지에 작품페이지로 돌아가는 버튼 추가
<br>
: 작품 상단 및 하단에 배치

- 작품 제작 시간순으로 재정렬

__to do__

<br>

---

## 20211104
### pathnote
<br>

__to do__
- 버그: 메인화면 모바일로 접속 시 작품 사진 터치로 이동되지 않는 점

---
## 20211101
### pathnote
<br>

__All__
- 작품 이미지 업데이트
- 작품 소개글 수정

__to do__
- url로 접속하여도 react가 정상 작동하도록 수정필요
- 언어 스위치 버튼 기능 구현
- REST API 공부해보기
- 페럴렉스 효과 추가하기

---

## 20211025 - 20211029
### pathnote
<br>

__home__
- 작품이미지 추가
- 작품페이지로 이동버튼 추가

__works__
- 작품 대표 이미지 통일
- 작품 내 알고리즘 이미지 제작
- 슬라이더 버튼 색상 선택 가능하도록 추가

__to do__
- 특정 url로 접속하여도 404가 나타나지 않도록?
<br> : 현재는 package.json에 아래 내용을 추가해둔 상태

```json
"scripts": {
    "start": "react-scripts start webpack-dev-server --inline --content-base . --history-api-fallback",
  
```

- 페럴렉스 효과 추가하기
- 작품 세부 페이지 다듬기

---

## 20211022
### pathnote
<br>

__Lab__
- LabIntro.js 추가
<br>
: lab page를 보다 정돈된 형태(의약품설명서 같은 느낌?)의 레이아웃으로 구상중

__to do__
- works content 내용물 추가 이미지 작업 필요
- visual coding 해보기
<br>
: neon, universe, food a capella 등

---

## 20211020
### pathnote
<br>

__Work__
- works content 작업중
<br>
: 작업물 표지 이미지 필요
<br>
: 코드 작업물 알고리즘 이미지 필요

__Lab__
- 비디오 추가하는 방법
<br>
: 비디오 UI를 텍스트 기반으로 변경
<br>
: 예시) play icon -> play 

- 언어 변경 버튼 구현해보기
<br>
: 화면에 보이는 컨텐츠만 변경하는 것이 아니라, 웹 전체의 정보가 변경이 가능한지?

---

## 20211019
### pathnote
<br>

__ImageSlider.js__
- 이미지 슬라이더를 제작함
<br>
: work contant page에서 활용 가능

__Lab__
- ImageSldier update
<br>
: 내용 보충 필요

- 레이아웃 정립 필요
<br>
: 현재는 별도의 레이아웃이 적용되어 있지 않음
<br>
: 코드를 업로드하여 쉽게 알아볼 수 있는 구조로 만들면 좋을 듯

__to do__
- work, lab page 에 들어갈 컨텐츠 필요
- works list infinate scroll 적용 연구
- 언어 변경토글 구현해보기

<br>

---

## 20211012 - 20211014
### pathnote
<br>

__nav__
- background를 클릭해도 메뉴가 감춰질 수 있도록 수정

__MainSection__
- 마우스 호버 효과를 애니메이션 효과로 수정
: 보다 동적인 웹사이트 대문
: 애니메이션 반복 간격 조정
- 마우스 호버 시 동적 효과 없이 즉시 활성화

__Footer__css
- footer_right: style-display: block

__Works page__css
- work-img--oversize 높이 자동조절하도록 수정
: 스크립트 없이 css 속성으로 적용함

```css
.work-img--oversize{
    /* 부모 요소의 너비를 무시하고 화면의 너비로 고정 */
    width: 100vw;
    /* 화면의 왼쪽에서 시작될 수 있도록 수정 */
    margin-left: calc(-50vw + 50%);
}
```

- WorkImageBoxGrid.js 추가
: grid가 적용된 컴포넌트와 분리하여 작성

<br>

---
## 20211006
### Upload dk react
<br>

__All__
- react로 만든 dk를 daekyojeong.com에 업로드
: 1. npm run bulid 로 빌드
: 2. index.html 에서 파일 경로 ="/" 을 ="./"로 변경하여야 정상적으로 작동

- 불필요하는 에러 유발 요소들 제거

__Navbar.js__
- 불필요한 요소 삭제

__Introduce.js__
- 이름에 <Link> 추가
: about으로 연결될 수 있도록

__Footer.js__
- 언어변경 버튼 시도
: 전체 css를 조정할 수 있는 방법 모색 필요
: 리액트에서는 권장하지 않는 방법(?)

__Work content page__
- imagebox.js work-img--oversize 하단 마진 실시간으로 수정
: debounce, useState 를 활용하여서 작성함

- textbox.js \n 구분점 추가

__Lab.js__
- 시약장 컨셉으로 제작 중 
: GridCardItem 활용

__to do__
- work, lab page 에 들어갈 컨텐츠 필요
- works list infinate scroll 적용 연구
- 언어 변경토글 구현해보기

---
## 20211005
### Works page
<br>

__All__
- 모든페이지에서 글씨 크기가 일정하게 적용될 수 있도록 수정

html{
    font-size: 10px;
}

__Work content page__
- 일부파일 파일명 변경
: 범용적이지 않은 컴포넌트의 이름을 세분화하였음
    TextBox.js -> WorkTextBox.js
    ImageBox.js -> WorkImageBox.js

__Works.js, GridCard.js__
- Works page 를 위해서 GridCard를 생성
: 현재는 grid 방식으로 정렬되어 있지만, 추후 변경소지 있음
: Lab page를 제작할 때 grid 방식으로 정렬 고려 중

__to do__
- lab page

- 작업물 컨텐츠 정리필요 

- work-img--oversize 실시간 동적으로 변경 가능할지 연구
- infinite scroll(looping)

<br>

---
## 20211004
### About page
<br>

__All__
index.html에 폰트(300,500,800) 추가

__ScrollToTop.js__
- 화면 전환 시 스크롤이 상단으로 이동하도록 수정

__Footer.js__
- 모든 화면에서 푸터가 노출 될 수 있도록 추가
- 언어변경 기능 추가 필요
: 어떻게 구현할지 고민해보기

__About.js__
- 포트폴리오 구성 참고하여, 어바웃 페이지 구성
: 인삿말, 짧은 소개, 타임라인

__to do__
- works, lab page

- 작업물 컨텐츠 정리필요 

- work-img--oversize 마진 수정 필요
: 자동으로 blank가 oversize 이미지 높이에 맞추어 마진이 조정될 수 있도록
: 혹은 absolute를 사용하지 않고 오버 사이즈가 가능한지
<br>

---
## 20211001
### Work content page
<br>

__Workintro.js, ImageBox.js, TextBox.js__
- 재사용 가능하도록 각종 UI 컴포넌트로 분리
__to do__
- about, works, lab

- 작업물 컨텐츠 정리필요 

- 링크 이동 시 화면이 상단으로 이동하도록 수정 필요
: 현재는 해당 스크롤 위치에 머물러 있음

- work-img--oversize 마진 수정 필요
: 자동으로 blank가 oversize 이미지 높이에 맞추어 마진이 조정될 수 있도록
: 혹은 absolute를 사용하지 않고 오버 사이즈가 가능한지
<br>

---
## 20210930
### Mainpage 정리 완료
<br>

__MainSection.js__
- 반응형 적용 완료

__Navbar.js__
- menu 수정 완료

__Cards.js, About.js__
- 기존 dk_w_rld 와 동일하게 구현 완료

__to do__
- about, works, lab, work 세부 페이지 layout 정립 필요

- 작업물 컨텐츠 정리필요 
<br>

---
## 20210920
### Mainpage 수정 시작
<br>

__MainSection.js__
- title 제작

__Navbar.js__
- logo 제작, menu 수정 중

__to do__
- menu 수정필요
<br>

---
## 20210915
### 카드형 UI component 분리
```javascript
function Carditem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                        {/* <p className="cards__item__desc">{props.desc}</p> */}
                    </div>
                </Link>
            </li>
        </>
    )
}
```

props 로 변수를 할당해서, 다른 컴포넌트에서도 관리할 수 있도록

```html
<Carditem
    src="images/img-9.jpeg"
    text="this is world "
    desc="this works blbl lorem ipsum"
    label="branding"
    path="/works"
/>
```

Cards 라는 컴포넌트에서 Carditem 을 활용하는 예시 <br>
json과 같은 파일로 데이터를 관리할 수 있을 것으로 보임 활용가능성이 무궁무진

---
### 자주 사용하는 UI 컴포넌트

전반적인 사이트/앱 내에서 공통적으로 활용되는 UI는 규정하여 사용

```javascript
const STYLES = ['btn--primary', 'btn--outline'];
  const SIZES = ['btn--meidum', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick,
    buttonStyle, 
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle)
            ? buttonStyle
            : STYLES[0]

            const checkButtonSize = SIZES.includes(buttonSize)
            ? buttonSize
            : SIZES[0]

            return (
                <Link to="/sign-up" className="btn-mobile">
                    <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
                    onClick={onClick}
                    type={type}
                    >
                        {children}
                    </button>
                </Link>
            )
    }
```
활용예시
```javascript
{button && <Button buttonStyle="btn--outline">Sign up</Button>}

 <Button
    className='btns'
    buttonStyle='btn--primary'
    buttonSize='btn--large'
    onClick={console.log('hey')}
>
```

버튼의 크기, 스타일 등을 규정하고 필요에 따라서 적절한 UI를 사용한다.

<br>

---

## 20210907 React start
시작 !