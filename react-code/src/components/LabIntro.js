import React from 'react'
import './LabIntro.css';

function LabIntro({titlee, titlek, funcdesc, updatedesc}) {
    return (
        <div className="lab-intro">
            <div className="lab-title-wrap">
                <h1 className="lab-title lab-title--english">{titlee}</h1>
                <h1 className="lab-title lab-title--korean">{titlek}</h1>
            </div>
            <div className="lab-intro__info">
                <div className="lab-intro__info__func">
                    <h2>Function</h2>
                    <p>{funcdesc}</p>
                </div>
                <div className="lab-intro__info__update">
                    <h2>Update</h2>
                    <p>{updatedesc.split("\n").map((txt)=>(
                        <>
                            {txt}
                            <br />
                        </>
                ))}</p>
                </div>
            </div>
        </div>
    )
}

export default LabIntro
