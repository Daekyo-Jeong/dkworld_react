import React from 'react'

const SIZES = {
    big: 'textbox--bigsize',
    md: 'textbox--middlesize'
};

function WorkTextBox({desc, size}) {
    const textSize = SIZES[size];

    return (
        <>
        <p className={textSize}>{desc.split("\n").map((txt)=>(
            <>
                {txt}
                <br />
            </>
        ))}</p>
        </>
    )
}

export default WorkTextBox;
