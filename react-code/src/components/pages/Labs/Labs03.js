//react-function-languege-switch
import React, {useState} from 'react'

function Labs03() {
    const [languegeSwitchDetect, setLanguegeSwitchDetect] = useState(true);
    const [languegeSwitchButton, setLanguegeSwitchButton] = useState("Korean");

    const activeLanguege = {
        display:'block'
    }

    const passiveLanguege = {
        display:'none'
    }

    const languegeSwitch = () => {
        if (languegeSwitchDetect === true){
            setLanguegeSwitchDetect(false);
            setLanguegeSwitchButton("English");
        } else {
            setLanguegeSwitchDetect(true);
            setLanguegeSwitchButton("Korean");
        }
    }

    return (
        <div>
            <h1>
                <span className="english" style={languegeSwitchDetect ? activeLanguege : passiveLanguege}>Hello, World</span>
                <span className="korean" style={languegeSwitchDetect ? passiveLanguege : activeLanguege}>안녕, 세상아</span>
            </h1>
            <br />
            <p>
                <span style={languegeSwitchDetect ? activeLanguege : passiveLanguege}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
                </span>
                <span style={languegeSwitchDetect ? passiveLanguege : activeLanguege}>
                    누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다. 
                    제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
                    사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 
                    계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다.</span>
            </p>
            <br />
            <button style={{position: 'fixed', top:'30%'}} onClick={languegeSwitch}>{languegeSwitchButton}</button>
        </div>
    )
}

export default Labs03
