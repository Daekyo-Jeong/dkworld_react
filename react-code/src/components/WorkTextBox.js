import React from 'react'

const SIZES = {
    big: 'textbox--bigsize',
    md: 'textbox--middlesize',
};

function WorkTextBox({desc, size}) {
    const textSize = SIZES[size];

    return (
        <>
        <p className={textSize}>{desc}</p>
        </>
    )
}

export default WorkTextBox;
