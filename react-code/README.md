# dk_w_rld React Project
이 프로젝트는 dk_w_rld 웹사이트를 `react` 를 이용해 구현합니다.

<br>

## 20210907 React start
시작 !

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

## 20210920
### Mainpage 수정 시작
<br>

__MainSection.js__
```
- title 제작
```

__Navbar.js__
```
- logo 제작, menu 수정 중
```

__to do__
```
- menu 수정필요
```

---

## 20210930
### Mainpage 정리 완료
<br>

__MainSection.js__
```
- 반응형 적용 완료
```

__Navbar.js__
```
- menu 수정 완료
```

__Cards.js, About.js__
```
- 기존 dk_w_rld 와 동일하게 구현 완료
```

__to do__
```
- about, works, lab, work 세부 페이지 layout 정립 필요

- 작업물 컨텐츠 정리필요 
```

---

## 20211001
### Work content page
<br>

__Workintro.js, ImageBox.js, TextBox.js__
```
- 재사용 가능하도록 각종 UI 컴포넌트로 분리
```
__to do__
```
- about, works, lab

- 작업물 컨텐츠 정리필요 

- 링크 이동 시 화면이 상단으로 이동하도록 수정 필요
: 현재는 해당 스크롤 위치에 머물러 있음

- work-img--oversize 마진 수정 필요
: 자동으로 blank가 oversize 이미지 높이에 맞추어 마진이 조정될 수 있도록
: 혹은 absolute를 사용하지 않고 오버 사이즈가 가능한지
```
